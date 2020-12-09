import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { WordpressApiService } from '../services/wordpress-api.service';
import { utf8Encode } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class PostsResolver implements Resolve<Observable<any>>{

    constructor(private _service:WordpressApiService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        const slug = route.params['slug'];
        return this._service.getCategory(slug).pipe(take(1));
    }

    

}