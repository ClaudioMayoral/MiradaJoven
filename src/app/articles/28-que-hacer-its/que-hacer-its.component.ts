import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-que-hacer-its',
  templateUrl: './que-hacer-its.component.html',
  styleUrls: ['./que-hacer-its.component.scss']
})
export class QueHacerItsComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('infecciones_transmision_sexual').subscribe(
      data => this.content = data[1]
    );
    this.path = [
      {
        title: 'Amigxs o Novixs',
        route: '/como-me-siento/amigxs-o-novixs'
      },
      {
        title: 'Cuidando mi cuerp@',
        route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo'
      },
      {
        title: 'Infecciones de Transmisión Sexual',
        route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/infecciones-transmision-sexual'
      }
    ];
  }

}
