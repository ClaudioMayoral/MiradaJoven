import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { PathRoute } from '../../../common/article/article.component';

@Component({
  selector: 'app-cuidando-mi-cuerpo',
  templateUrl: './cuidando-mi-cuerpo.component.html',
  styleUrls: ['./cuidando-mi-cuerpo.component.scss'],
})
export class CuidandoMiCuerpo implements OnInit {

  cards = DataTree.cuidandoMiCuerpo;
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