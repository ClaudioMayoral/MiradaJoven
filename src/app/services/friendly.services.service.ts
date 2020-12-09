import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface FService{

    unit_name:string;
    address:string;
    neighborhood:string;
    state:string;
    postal_code:string;
    phone:string;
    coordinates:any;
    service_days:string;
    turn:string;
    has_contraceptive:boolean;
    has_its_service:boolean;
    has_medic_service:boolean;
    has_orientation_service:boolean;
    has_pregnant_service:boolean;
    has_psychology_service:boolean;
    has_ssra:boolean;
    has_workshops:boolean;
    others:string;
}

@Injectable({
    providedIn: 'root'
  })
export class FriendlyServicesService{

    private COLLECTION = "servicios_amigables";

    constructor(private db:AngularFirestore,private http:HttpService){}

    public getClientIp(){
        return this.http.doGet('https://api.ipify.org/?format=json')
            .pipe(
                map((res:any) => res.ip)
            );
    }

    public async rate_service(serviceName:string,rate:number,clientIp:string){
        const collection = this.db.collection(this.COLLECTION);
        const doc = await collection.ref
            .where("service_name","==",serviceName)
            .get();
        if(doc.empty){
            return collection.ref.add({
                service_name: serviceName,
                good: rate == 2?1:0,
                regular: rate == 1?1:0,
                bad: rate == 0?1:0,
                total_opinions: 1,
                clients: [clientIp]
            });
        }else{
            const data = doc.docs[0].data();
            if(!data.clients.includes(clientIp)){
                return collection.doc(doc.docs[0].id).update({
                    good: rate == 2?data.good +1:data.good,
                    regular: rate == 1?data.regular +1:data.regular,
                    bad: rate == 0?data.bad + 1:data.bad,
                    total_opinions: data.total_opinions + 1
                });
            }
        }
    }
}