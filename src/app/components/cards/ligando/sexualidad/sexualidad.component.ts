import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
import { PathRoute } from 'src/app/components/common/article/article.component';

@Component({
  selector: 'app-sexualidad',
  templateUrl: './sexualidad.component.html',
  styleUrls: ['./sexualidad.component.scss'],
})
export class SexualidadComponent implements OnInit {
  path:PathRoute[];

  cards;
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.sexualidad;
    }else{
      this.cards = DataTreeNahua.sexualidad;
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
