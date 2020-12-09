import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class HttpService{

    constructor(private _http:HttpClient){}

    public doGet(url:string,params?:HttpParams){
        return this._http.get(url,{params});
    }
}