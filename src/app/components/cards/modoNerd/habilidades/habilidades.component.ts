import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from '../../../common/article/article.component';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('habilidades').subscribe(
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