import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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