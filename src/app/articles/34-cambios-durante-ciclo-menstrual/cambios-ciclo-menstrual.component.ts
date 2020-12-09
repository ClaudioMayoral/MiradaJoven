import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cambios-ciclo-menstrual',
  templateUrl: './cambios-ciclo-menstrual.component.html',
  styleUrls: ['./cambios-ciclo-menstrual.component.scss']
})
export class CambiosCicloMenstrualComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('menstruacion').subscribe(
      data => this.content = data[2]
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
        title: 'Menstruacion',
        route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/menstruacion'
      },
    ];
  }

}
