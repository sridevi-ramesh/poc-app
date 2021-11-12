import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {TrainService} from "../../service/departure-list.service";



@Injectable()
export class DepartureGuard implements CanActivate {
  public constructor(
    private readonly trainService: TrainService,
  ) {}

  public canActivate(): boolean {
    const loginData = this.trainService.getLoginData();
    return loginData.accessAllowed;
  }
}
