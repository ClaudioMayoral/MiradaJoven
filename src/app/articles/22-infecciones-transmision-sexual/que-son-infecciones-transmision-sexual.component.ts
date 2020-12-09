import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { PathRoute } from 'src/app/components/common/article/article.component';

@Component({
  selector: 'app-que-son-infecciones-transmision-sexual',
  templateUrl: './que-son-infecciones-transmision-sexual.component.html',
  styleUrls: ['./que-son-infecciones-transmision-sexual.component.scss']
})
export class QueInfeccionesTransmisionSexualComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;

  constructor(http:HttpClient) {
    super(http);
  }
  
  ngOnInit(): void {
    this.loadContent('infecciones_transmision_sexual').subscribe(
      data => this.content = data[0]
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
