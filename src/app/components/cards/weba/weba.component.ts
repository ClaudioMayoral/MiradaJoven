import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-weba',
  templateUrl: './weba.component.html',
  styleUrls: ['./weba.component.scss'],
})
export class WebaComponent extends CardsBase implements OnInit {

  contents:any;
  cards;
  lenguaje;
  
  constructor(http:HttpClient) {
    super(http);
    //Seleccion de lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.weba;
    }else{
      this.cards = DataTreeNahua.weba;
    }
  }

  ngOnInit() {
    this.loadContent('weba').subscribe(
      data => this.contents = data
    );
  }

}
