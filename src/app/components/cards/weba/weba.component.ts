import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-weba',
  templateUrl: './weba.component.html',
  styleUrls: ['./weba.component.scss'],
})
export class WebaComponent extends CardsBase implements OnInit {

  contents:any;
  cards = DataTree.weba;
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('weba').subscribe(
      data => this.contents = data
    );
  }

}
