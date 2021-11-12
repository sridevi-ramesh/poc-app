import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {DepartureListComponent} from "../departure-list.component";
import {TrainService} from "../../../service/departure-list.service";
import {mockTrainCodeData} from "./departure-list.mock";
import {of, EMPTY} from "rxjs";

interface Ctx {
  component: DepartureListComponent;
  fixture: ComponentFixture<DepartureListComponent>;
  trainService: TrainService;
}

describe('DepartureListComponent', function() {
  beforeEach(
    waitForAsync(function(this: Ctx) {
      TestBed.configureTestingModule({
        declarations: [DepartureListComponent],
        providers: [
          {
            provide: TrainService,
            useValue: jasmine.createSpyObj<TrainService>('TrainService', {getStationCodes:of(mockTrainCodeData),
              getTrainDepartures: EMPTY}),
          },
        ],
      }).overrideTemplate(DepartureListComponent, '');
      this.fixture = TestBed.createComponent(DepartureListComponent);
      this.component = this.fixture.componentInstance;
      this.trainService = TestBed.inject(TrainService);
      this.fixture.detectChanges();
    }),
  );

  it('component should be defined', function(this: Ctx) {
    expect(this.component).toBeDefined();
  });

  describe('ngOnInit', function() {
    it('should call train service', function(this: Ctx) {
      expect(this.trainService.getStationCodes).toHaveBeenCalled();
    });

  });

});
