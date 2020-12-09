import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { PathRoute } from 'src/app/components/common/article/article.component';

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.scss'],
})
export class CuriosidadesComponent implements OnInit {

  cards = DataTree.curiosidad;
  path:PathRoute[];
  constructor() { }

  ngOnInit() {
    this.path = [
      {
        title: "Amigxs o novixs",
        route: "/como-me-siento/amigxs-o-novixs"
      }
    ]
  }
  

}
