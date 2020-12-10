import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';

@Component({
  selector: 'app-violencia',
  templateUrl: './violencia.component.html',
  styleUrls: ['./violencia.component.scss'],
})
export class ViolenciaComponent implements OnInit {

  path:PathRoute[];
  
  cards;
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
