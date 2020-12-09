import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../cards.base';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-amor-yrelacion',
  templateUrl: './amor-yrelacion.component.html',
  styleUrls: ['./amor-yrelacion.component.scss'],
})
export class AmorYRelacionComponent extends CardsBase implements OnInit {

  contents:any;
  path:PathRoute[];
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('amor_y_relaciones').subscribe(
      response => this.contents = response
    );
    this.path = [
      {
        title: "Amigxs o novixs",
        route: "/como-me-siento/amigxs-o-novixs"
      }
    ]
  }

}
