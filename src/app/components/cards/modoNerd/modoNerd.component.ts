import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';

@Component({
  selector: 'app-modoNerd',
  templateUrl: './modoNerd.component.html',
  styleUrls: ['./modoNerd.component.scss'],
})
export class ModoNerdComponent implements OnInit {
 
  cards;
  
  lenguaje;
  
  constructor() {
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.modoNerd;
    }else{
      this.cards = DataTreeNahua.modoNerd;
    }
   }

  ngOnInit() {}


}
