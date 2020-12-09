import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-violencia-genero',
  templateUrl: './violencia-genero.component.html',
  styleUrls: ['./violencia-genero.component.scss'],
})
export class ViolenciaGeneroComponent extends CardsBase implements OnInit {

    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('violencia_de_genero').subscribe(
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