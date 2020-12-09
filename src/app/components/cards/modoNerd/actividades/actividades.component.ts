import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from '../../../common/article/article.component';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
})
export class ActividadesComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('actividades').subscribe(
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