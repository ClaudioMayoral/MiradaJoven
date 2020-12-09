import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

  cards = DataTree.eventos;
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