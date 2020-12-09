import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FriendlyServicesService } from '../services/friendly.services.service';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServicesResolver implements Resolve<Observable<any>>{

    constructor(private _service:FriendlyServicesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<Observable<any>> | Promise<Observable<any>> {
        return null;
    }

    

}