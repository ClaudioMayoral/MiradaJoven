import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-respetar-tu-cuerpo',
  templateUrl: './respetar-tu-cuerpo.component.html',
  styleUrls: ['./respetar-tu-cuerpo.component.scss']
})
export class RespetarTuCuerpoComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'Respetar tu cuerpo y el de los demás',
      link: '../../../../assets/audio/21-Respetar tu cuerpo y el de los demás.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('violencia_en_pareja').subscribe(
      data => this.content = data[9]
    );
    this.path = [
      {
        title: 'Amigxs o Novixs',
        route: '/como-me-siento/amigxs-o-novixs'
      },
      {
        title: 'Violencia',
        route: '/como-me-siento/amigxs-o-novixs/violencia/'
      },
      {
        title: 'Violencia en pareja',
        route: '/como-me-siento/amigxs-o-novixs/violencia/violencia-pareja'
      }
    ];
  }

}
