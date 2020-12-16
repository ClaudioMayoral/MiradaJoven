import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-la-menstruacion',
  templateUrl: './la-menstruacion.component.html',
  styleUrls: ['./la-menstruacion.component.scss']
})
export class LaMenstruacionComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'El periodo premenstrual',
      link: '../../../../assets/audio/15-El periodo premenstrual.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('menstruacion').subscribe(
      data => this.content = data[3]
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
