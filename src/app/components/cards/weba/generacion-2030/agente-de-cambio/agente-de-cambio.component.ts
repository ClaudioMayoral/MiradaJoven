import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-agente-de-cambio',
  templateUrl: './agente-de-cambio.component.html',
  styleUrls: ['./agente-de-cambio.component.scss'],
})
export class AgenteDeCambioComponent implements OnInit {

  cards = DataTree.violencia;
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