import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from 'src/app/components/cards/cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proceso-parto',
  templateUrl: './proceso-parto.component.html',
  styleUrls: ['./proceso-parto.component.scss']
})
export class ProcesoPartoComponent extends CardsBase implements OnInit {

  path:PathRoute[];
  content:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit(): void {
    this.loadContent('embarazo').subscribe(
      data => this.content = data[4]
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
