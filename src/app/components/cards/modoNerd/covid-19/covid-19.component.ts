import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from '../../../common/article/article.component';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-covid-19',
  templateUrl: './covid-19.component.html',
  styleUrls: ['./covid-19.component.scss'],
})
export class Covid19Component extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('covid_19').subscribe(
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