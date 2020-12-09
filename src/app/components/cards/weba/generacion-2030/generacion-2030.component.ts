import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-generacion-2030',
  templateUrl: './generacion-2030.component.html',
  styleUrls: ['./generacion-2030.component.scss'],
})
export class Generacion2030Component implements OnInit {

  cards = DataTree.generacion2030;
  path:PathRoute[];
  
  constructor() { }

  ngOnInit() {
    this.path = [
      {
        title: "Participa",
        route: "/como-me-siento/participa"
      }
    ]
  }

}