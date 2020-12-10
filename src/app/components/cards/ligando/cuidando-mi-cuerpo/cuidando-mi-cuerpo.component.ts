import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
import { PathRoute } from '../../../common/article/article.component';

@Component({
  selector: 'app-cuidando-mi-cuerpo',
  templateUrl: './cuidando-mi-cuerpo.component.html',
  styleUrls: ['./cuidando-mi-cuerpo.component.scss'],
})
export class CuidandoMiCuerpo implements OnInit {

  path:PathRoute[];
  
  cards;
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.cuidandoMiCuerpo;
    }else{
      this.cards = DataTreeNahua.cuidandoMiCuerpo;
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