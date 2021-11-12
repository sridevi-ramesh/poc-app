import {Inject, Injectable} from "@angular/core";
import {HttpHeaders,HttpClient,HttpParams,HttpErrorResponse} from "@angular/common/http";
import {Observable, of,tap, catchError} from "rxjs";

import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root',
})

export class ApiService{
  protected baseUrl = environment.baseUrl;
  ContentType = 'application/json';
  subscriptionKey = environment.subscriptionKey;


  constructor(private readonly http: HttpClient) { }

  public get(relativeUrl: string, queryParams?:{},httpHeaders?:{}) : Observable<any> {
    const url = this.baseUrl;
    let params = new HttpParams();
    if(queryParams) {
      for(const param in queryParams) {
        if(param) {
          // @ts-ignore
          params = params.set(param,queryParams[param]);
        }
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': this.ContentType,
        'Ocp-Apim-Subscription-Key': this.subscriptionKey
      }),
      params
    };
    return this.http.get(url+relativeUrl,httpOptions);

  }
}
