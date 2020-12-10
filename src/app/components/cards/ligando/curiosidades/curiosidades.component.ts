import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
import { PathRoute } from 'src/app/components/common/article/article.component';

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.component.html',
  styleUrls: ['./curiosidades.component.scss'],
})
export class CuriosidadesComponent implements OnInit {
  path:PathRoute[];
  cards;
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.curiosidad;
    }else{
      this.cards = DataTreeNahua.curiosidad;
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
