import {Component, OnInit} from '@angular/core';
import {Observable, Subject, take, takeUntil} from "rxjs";
import {TrainService} from '../../service/departure-list.service';
import {
  DepartureResponse,
  TrainCodes,
  TrainDetails,
  TrainPayload
} from '../../shared/interfaces/departure-list.interface';
import {PAGE_SIZE, TRAIN_CATEGORY, TRAIN_STATION} from '../../shared/constants/departure.constants';
import {DepartureColumnsList} from './departure-columns-list';
import {AgGridColumnDefs} from "../../shared/interfaces/ag-grid.interface";


@Component({
  selector: 'app-departure-list',
  templateUrl: 'departure-list.component.html',
  styleUrls: ['departure-list.component.scss']
})
export class DepartureListComponent implements OnInit {
  public code: string = '';
  public rowData: any;
  public columnDefs: AgGridColumnDefs[];
  public trainStation: string = TRAIN_STATION;
  public gridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
      filterParams:{
        suppressAndOrCondition: true
      },
      minWidth: 100,
    },
    pagination: true,
    paginationPageSize: PAGE_SIZE
  };
  private readonly destroy$ = new Subject();

  constructor(private readonly trainService: TrainService) {
    this.columnDefs = DepartureColumnsList;
  }

  ngOnInit(): void {
    this.getTrainCodes().pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.code = this.getMatchingTrainCode(res.payload);
        this.getDepartureList().pipe(takeUntil(this.destroy$))
          .subscribe(res => {
          this.getDepartures(res.payload.departures);
        });
      });
  }

  public getTrainCodes(): Observable<TrainPayload> {
    return this.trainService.getStationCodes();
  }


  private getMatchingTrainCode(trainCodes: TrainCodes[]): string {
    const train = trainCodes.filter(function (trainCode) {
      return trainCode.namen.lang === TRAIN_STATION;
    });
    return train[0].code;
  }

  public getDepartureList(): Observable<DepartureResponse> {
    return this.trainService.getTrainDepartures(this.code);
  }

  private ConvertDeparture(details: TrainDetails[]): TrainDetails[] {
    details.map((detail, i) => {
      detail.plannedDateTime = new Date(detail.plannedDateTime).toString();
      if (detail.trainCategory === TRAIN_CATEGORY.IC) {
        detail.trainCategory = TRAIN_CATEGORY.INTERCITY;
      } else {
        detail.trainCategory = TRAIN_CATEGORY.SPRINTER;
      }
    });
    return details;
  }

  public getDepartures(details: TrainDetails[]): void {
    details = this.ConvertDeparture(details);
    this.rowData = details;
  }

  public ngOnDestroy() {
    this.destroy$.next(this);
    this.destroy$.complete();
  }
}
