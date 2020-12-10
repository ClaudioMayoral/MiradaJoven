import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';

@Component({
  selector: 'app-generacion-2030',
  templateUrl: './generacion-2030.component.html',
  styleUrls: ['./generacion-2030.component.scss'],
})
export class Generacion2030Component implements OnInit {

  cards;
  path:PathRoute[];
  
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.generacion2030;
    }else{
      this.cards = DataTreeNahua.generacion2030;
    }
   }

  ngOnInit() {
    this.path = [
      {
        title: "Participa",
        route: "/como-me-siento/participa"
      }
    ]
  }

}