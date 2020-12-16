import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-prevencion-embarazo-adolescencia',
  templateUrl: './prevencion-embarazo-adolescencia.component.html',
  styleUrls: ['./prevencion-embarazo-adolescencia.component.scss']
})
export class PrevencionEmbarazoAdolescenciaComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: Track []=[
    {
      title: 'La prevención del embarazo en la adolescencia',
      link: '../../../../assets/audio/27-La prevención del embarazo en la adolescencia.mp3'
    }
  ];

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('embarazo').subscribe(
      data => this.content = data[6]
    );
    this.path = [
      {
        title: 'Amigxs o Novixs',
        route: '/como-me-siento/amigxs-o-novixs'
      },
      {
        title: 'Embarazo',
        route: 'como-me-siento/amigxs-o-novixs/embarazo'
      }
    ];
  }

}
