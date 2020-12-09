import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-metodos-anticonceptivos',
  templateUrl: './metodos-anticonceptivos.component.html',
  styleUrls: ['./metodos-anticonceptivos.component.scss'],
})
export class MetodosAnticonceptivosComponent extends CardsBase implements OnInit {

    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
      }

    ngOnInit() {
        this.loadContent('metodos_anticonceptivos').subscribe(
            response => this.contents = response
          );
        this.path = [
        {
            title: "Amigxs o novixs",
            route: "/como-me-siento/amigxs-o-novixs"
        }
        ]
    }
}