import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';

@Component({
  selector: 'app-agente-de-cambio',
  templateUrl: './agente-de-cambio.component.html',
  styleUrls: ['./agente-de-cambio.component.scss'],
})
export class AgenteDeCambioComponent implements OnInit {

  cards;
  path:PathRoute[];
  
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.violencia;
    }else{
      this.cards = DataTreeNahua.violencia;
    }
   }

  ngOnInit() {
    this.path = [
      {
        title: "Amigxs o novixs",
        route: "/como-me-siento/amigxs-o-novixs"
      }
    ]
  }

}