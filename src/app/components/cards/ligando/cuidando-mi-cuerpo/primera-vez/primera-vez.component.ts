import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-primera-vez',
  templateUrl: './primera-vez.component.html',
  styleUrls: ['./primera-vez.component.scss'],
})
export class PrimeraVezComponent extends CardsBase implements OnInit {
    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('mi_primera_vez').subscribe(
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