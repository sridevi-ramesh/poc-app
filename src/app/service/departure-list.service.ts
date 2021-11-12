import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from '../shared/services/api-service';
import {DepartureResponse, TrainPayload, loginInfo} from '../shared/interfaces/departure-list.interface';
import {loginData} from '../shared/mock/departure-mock';


@Injectable({
  providedIn: 'root'
})

export class TrainService {

  public trainCodeUrl: string;
  public trainDepartureUrl: string;

  constructor(private apiService: ApiService) {
    this.trainCodeUrl = 'reisinformatie-api/api/v2/stations';
    this.trainDepartureUrl = 'reisinformatie-api/api/v2/departures';
  }

  getStationCodes(): Observable<TrainPayload> {
    return this.apiService.get(this.trainCodeUrl);
  }

  getTrainDepartures(code: string): Observable<DepartureResponse> {
    return this.apiService.get(this.trainDepartureUrl, {'station': code});
  }

  getLoginData(): loginInfo{
    return loginData;
  }
}
