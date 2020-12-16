import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { HttpClient } from '@angular/common/http';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { Track } from "ngx-audio-player";


@Component({
  selector: 'app-deseo-sexual',
  templateUrl: './deseo-sexual.component.html',
  styleUrls: ['./deseo-sexual.component.scss']
})
export class DeseoSexualComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'Qué es el deseo sexual',
      link: '../../../../assets/audio/18-Qué es el deseo sexual.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }
  
  currentTrack: Track = null;
  currentTime: any;
  appendTracksToPlaylistDisable = false;

  msaapPageSizeOptions = [5,10,15];

  onEnded(event) {
    console.log(event);
    this.currentTrack = null;
  }

  ngOnInit(): void {
    this.loadContent('mi_primera_vez').subscribe(
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
        title: 'Mi primera vez',
        route: '/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo/primera-vez'
      }
    ];
  }

}
