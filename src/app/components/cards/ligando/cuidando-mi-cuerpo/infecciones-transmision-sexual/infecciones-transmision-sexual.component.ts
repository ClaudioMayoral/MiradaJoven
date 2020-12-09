import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infecciones-transmision-sexual',
  templateUrl: './infecciones-transmision-sexual.component.html',
  styleUrls: ['./infecciones-transmision-sexual.component.scss'],
})
export class InfeccionesTransmisionSexualComponent extends CardsBase implements OnInit {
    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
    }

    ngOnInit() {
        this.loadContent('infecciones_transmision_sexual').subscribe(
            response => this.contents = response
        );
        this.path = [
            {
                title: "Amigxs o novixs",
                route: "/como-me-siento/amigxs-o-novixs"
            },
            {
                title: "Cuidando mi cuerp@",
                route: "/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo"
            }
        ]
    }
}