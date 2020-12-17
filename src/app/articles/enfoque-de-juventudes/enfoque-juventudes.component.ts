import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enfoque-juventudes',
  templateUrl: './enfoque-juventudes.component.html',
  styleUrls: ['./enfoque-juventudes.component.scss']
})
export class EnfoqueJuventudesComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;
  track: any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('yoAgenteCambio').subscribe(
      data => this.content = data[1]
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
    ];
  }

}
