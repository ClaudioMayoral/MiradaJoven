import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../../cards.base';

@Component({
  selector: 'app-aprende',
  templateUrl: './aprende.component.html',
  styleUrls: ['./aprende.component.scss'],
})
export class AprendeComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
   }

  ngOnInit() {
    this.loadContent('aprende').subscribe(
      data => this.contents = data
    );
    this.path = [
      {
        title: "Participa",
        route: "/como-me-siento/participa"
      },
      {
        title: "Generacion 2030",
        route: "/como-me-siento/participa/generacion-2030"
      }
    ]
  }

}