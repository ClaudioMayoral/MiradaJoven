import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {

  private ENPDOINT = "https://miradajoven.org/wp-json/wp/v2";

  constructor(private http:HttpService) { }

  public getPosts(category:string,page:string){
    const params = new HttpParams().set("categories",category).set("page",page).set("_embed","");
    return this.http.doGet(`${this.ENPDOINT}/posts`,params);
  }

  public getCategory(slug:string){
    const params = new HttpParams().set("slug",slug);
    return this.http.doGet(`${this.ENPDOINT}/categories`,params);
  }
}
