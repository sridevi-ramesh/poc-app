import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartureListComponent} from "./components/departure-list/departure-list.component";
import {DepartureGuard} from "./components/departure-list/departure-guard";

const routes: Routes = [

  {
    path : 'train-departures',
    canActivate: [DepartureGuard],
    component: DepartureListComponent
  },
  {
    path: '',
    redirectTo: 'train-departures',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
