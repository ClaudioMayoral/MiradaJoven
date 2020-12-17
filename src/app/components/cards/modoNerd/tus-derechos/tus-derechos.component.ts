import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { PathRoute } from '../../../common/article/article.component';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-tus-derechos',
  templateUrl: './tus-derechos.component.html',
  styleUrls: ['./tus-derechos.component.scss'],
})
export class TusDerechosComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  currentTrack: Track = null;
    currentTime: any;
    appendTracksToPlaylistDisable = false;
  
    msaapPageSizeOptions = [7,5];
    track: Track []=[
        {
            title: 'Títulos',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/00-Cartilla-Títulos.mp3'
        },
        {
            title: 'Introducción',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/01-Cartilla-Introducción.mp3'
        },
        {
            title: 'Preámbulo',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/02-Cartilla-Preámbulo.mp3'
        },
        {
            title: 'Todos los derechos',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-(all).mp3'
        },
        {
            title: 'Los derechos 0',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-00.mp3'
        },
        {
            title: 'Los derechos 1',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-01.mp3'
        },
        {
            title: 'Los derechos 2',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-02.mp3'
        },
        {
            title: 'Los derechos 3',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-03.mp3'
        },
        {
            title: 'Los derechos 4',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-04.mp3'
        },
        {
            title: 'Los derechos 5',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-05.mp3'
        },
        {
            title: 'Los derechos 6',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-06.mp3'
        },
        {
            title: 'Los derechos 7',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-07.mp3'
        },
        {
            title: 'Los derechos 8',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-08.mp3'
        },
        {
            title: 'Los derechos 9',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-09.mp3'
        },
        {
            title: 'Los derechos 10',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-10.mp3'
        },
        {
            title: 'Los derechos 11',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-11.mp3'
        },
        {
            title: 'Los derechos 12',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-12.mp3'
        },
        {
            title: 'Los derechos 13',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-13.mp3'
        },
        {
            title: 'Los derechos 14',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/03-Cartilla-Los derechos-14.mp3'
        },
        {
            title: 'Sustento Jurídico',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-00.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 1',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-01.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 2',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-02.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 3',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-03.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 4',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-04.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 5',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-05.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 6',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-06.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 7',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-07.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 8',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-08.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 9',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-09.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 10',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-10.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 11',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-11.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 12',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-12.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 13',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-13.mp3'
        },
        {
            title: 'Sustento Jurídico - Derecho 14',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/04-Cartilla-Sustento Jurídico-Derecho-14.mp3'
        },
        {
            title: 'Glosario',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/05-Cartilla-Glosario.mp3'
        },
        {
            title: 'Organizaciones y promotores',
            link: '../../../../assets/audio/Cartilla de Derechos Sexuales/06-Cartilla-Organizaciones y promotores.mp3'
        }
    ];
  
    // Material Style Advance Audio Player Playlist
    msaapTableHeader: string = 'My Playlist';
    msaapColumnHeader: string = 'My Music';
  
    onEnded(event) {
      console.log(event);
      this.currentTrack = null;
    }
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('tus_derechos').subscribe(
      data => this.contents = data
    );
    this.path = [
        {
          title: "Curiosx",
          route: "/como-me-siento/curiosx"
        }
      ]
  }

}