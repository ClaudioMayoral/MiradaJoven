import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-violencia-digital',
  templateUrl: './violencia-digital.component.html',
  styleUrls: ['./violencia-digital.component.scss'],
})
export class ViolenciaDigitalComponent extends CardsBase implements OnInit {

    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('violencia_digital').subscribe(
            response => this.contents = response
          );
        this.path = [
            {
                title: "Amigxs o novixs",
                route: "/como-me-siento/amigxs-o-novixs"
            },
            {
                title: "Violencia",
                route: "/como-me-siento/amigxs-o-novixs/violencia"
            }
        ]
    }
}