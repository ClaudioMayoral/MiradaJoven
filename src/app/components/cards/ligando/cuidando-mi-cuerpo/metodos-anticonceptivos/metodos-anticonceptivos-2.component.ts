import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-metodos-anticonceptivos-2',
  templateUrl: './metodos-anticonceptivos-2.component.html',
  styleUrls: ['./metodos-anticonceptivos-2.component.scss'],
})
export class MetodosAnticonceptivos2Component extends CardsBase implements OnInit {
    contents:any;
    path:PathRoute[];
    currentTrack: Track = null;
    currentTime: any;
    appendTracksToPlaylistDisable = false;
  
    msaapPageSizeOptions = [9];
    track: Track []=[
        {
            title: 'Anillo vaginal',
            link: '../../../../assets/audio/01-Métodos anticonceptivos-anillo vaginal.mp3'
        },
        {
            title: 'Pastillas anticonceptivas',
            link: '../../../../assets/audio/02-Métodos anticonceptivos-pastillas anticonceptivas.mp3'
        },
        {
            title: 'Implante subdérmico',
            link: '../../../../assets/audio/03-Métodos anticonceptivos-implante subdérmico.mp3'
        },
        {
            title: 'Inyecciones anticonceptivas',
            link: '../../../../assets/audio/04-Métodos anticonceptivos-inyecciones anticonceptivas.mp3'
        },
        {
            title: 'Anticoncepción de emergencia',
            link: '../../../../assets/audio/05-Métodos anticonceptivos-anticoncepción de emergencia.mp3'
        },
        {
            title: 'Parche anticonceptivo',
            link: '../../../../assets/audio/06-Métodos anticonceptivos-parche anticonceptivo.mp3'
        },
        {
            title: 'Condón masculino',
            link: '../../../../assets/audio/07-Métodos anticonceptivos-condón masculino.mp3'
        },
        {
            title: 'Condón femenino',
            link: '../../../../assets/audio/08-Métodos anticonceptivos-condón femenino.mp3'
        },
        {
            title: 'Métodos permanentes',
            link: '../../../../assets/audio/09-Métodos anticonceptivos-métodos permanentes.mp3'
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
        this.loadContent('metodos_anticonceptivos_2').subscribe(
            response => this.contents = response
        );
        this.path = [
        {
            title: "Amigxs o novixs",
            route: "/como-me-siento/amigxs-o-novixs"
        },
        {
            title: "Cuidando mi cuerpo",
            route: "/como-me-siento/amigxs-o-novixs/cuidando-mi-cuerpo"
        },
        ]
    }
}