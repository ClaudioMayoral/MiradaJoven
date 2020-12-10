import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
@Component({
  selector: 'app-ligando',
  templateUrl: './ligando.component.html',
  styleUrls: ['./ligando.component.scss'],
})
export class LigandoComponent implements OnInit {

  cards;
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.ligando;
    }else{
      this.cards = DataTreeNahua.ligando;
    }
   }

  ngOnInit() {}

}
