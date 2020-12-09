import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-quePasaria',
  templateUrl: './quePasaria.component.html',
  styleUrls: ['./quePasaria.component.scss'],
})
export class QuePasariaComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
   }

  ngOnInit() {
    this.loadContent('que_pasaria_si').subscribe(
      data => this.contents = data
    );
  }

}
