import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';

@Component({
  selector: 'app-eventos',
  templateUrl: './proximos.eventos.component.html',
  styleUrls: ['./proximos.eventos.component.scss'],
})
export class ProximosEventosComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('proximosEventos').subscribe(
      data => this.contents = data
    );
    this.path = [
      {
        title: "Participa",
        route: "/como-me-siento/participa"
      },
      {
        title: "Eventos",
        route: "/como-me-siento/participa/eventos"
      }
    ]
  }

}