import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-conocer-tu-cuerpo',
  templateUrl: './conocer-tu-cuerpo.component.html',
  styleUrls: ['./conocer-tu-cuerpo.component.scss']
})
export class ConocerTuCuerpoComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'Conocer tu cuerpo es conocerte a ti mismo',
      link: '../../../../assets/audio/12-Conocer tu cuerpo es conocerte a ti mismo.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('conoce_tu_cuerpo').subscribe(
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
        title: 'Conoce tu cuerp@',
        route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/conoce-tu-cuerpo'
      }
    ];
  }

}
