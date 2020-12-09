import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { PathRoute } from 'src/app/components/common/article/article.component';

@Component({
  selector: 'app-sexualidad',
  templateUrl: './sexualidad.component.html',
  styleUrls: ['./sexualidad.component.scss'],
})
export class SexualidadComponent implements OnInit {

  cards = DataTree.sexualidad;
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
