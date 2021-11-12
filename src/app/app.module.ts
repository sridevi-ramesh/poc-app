import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrainService} from './service/departure-list.service';
import {ApiService} from './shared/services/api-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AgGridModule} from 'ag-grid-angular';
import {DepartureListComponent} from './components/departure-list/departure-list.component';
import {GlobalErrorHandler} from './shared/services/error/global-error-handler.service';
import {MatDialogModule} from '@angular/material/dialog';
import {ErrorDialogComponent} from './shared/components/error-dialog/error-dialog.component';
import {ErrorDialogService} from './shared/services/error/error-dialog.service';

import {CacheInterceptor} from './interceptor/httpcache.interceptor';
import {HttpCacheService} from './shared/services/cache-service';

import {DepartureGuard} from './components/departure-list/departure-guard';


@NgModule({
  declarations: [
    AppComponent,
    DepartureListComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [TrainService,
    ApiService,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    HttpCacheService, ErrorDialogService,
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    DepartureGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
