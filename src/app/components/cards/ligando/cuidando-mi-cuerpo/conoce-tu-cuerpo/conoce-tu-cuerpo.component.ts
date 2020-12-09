import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conoce-tu-cuerpo',
  templateUrl: './conoce-tu-cuerpo.component.html',
  styleUrls: ['./conoce-tu-cuerpo.component.scss'],
})
export class ConoceTuCuerpoComponent extends CardsBase implements OnInit {
    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('conoce_tu_cuerpo').subscribe(
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