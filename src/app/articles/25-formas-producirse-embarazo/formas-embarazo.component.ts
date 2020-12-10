import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formas-embarazo',
  templateUrl: './formas-embarazo.component.html',
  styleUrls: ['./formas-embarazo.component.scss']
})
export class FormasEmbarazoComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('embarazo').subscribe(
      data => this.content = data[0]
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
  stop$ = new Subject();
  audioObj = new Audio();
  file = [
      {
        url: './assets/audio/22-De qué formas puede producirse un embarazo.mp3'
        ,name: 'De qué formas puede producirse un embarazo audio'
      }
    ]

  play(){
    this.audioObj.play();
  }

  pause(){
    this.audioObj.pause();
  }

  stop(){
    this.stop$.next();
  }

}
