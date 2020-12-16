import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-organos-genitales-masculinos',
  templateUrl: './organos-genitales-masculinos.component.html',
  styleUrls: ['./organos-genitales-masculinos.component.scss']
})
export class OrganosGenitalesMasculinosComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'Órganos genitales masculinos',
      link: '../../../../assets/audio/14-Órganos genitales masculinos.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('conoce_tu_cuerpo').subscribe(
      data => this.content = data[4]
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
