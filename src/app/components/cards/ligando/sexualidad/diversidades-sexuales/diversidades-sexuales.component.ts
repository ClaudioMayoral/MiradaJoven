import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diversidades-sexuales',
  templateUrl: './diversidades-sexuales.component.html',
  styleUrls: ['./diversidades-sexuales.component.scss'],
})
export class DiversidadesSexualesComponent extends CardsBase implements OnInit {

    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('diversidades_sexuales').subscribe(
            response => this.contents = response
          );
        this.path = [
            {
                title: "Amigxs o novixs",
                route: "/como-me-siento/amigxs-o-novixs"
            },
            {
                title: "Sexualidad",
                route: "/como-me-siento/amigxs-o-novixs/sexualidad"
            }
        ]
    }
}