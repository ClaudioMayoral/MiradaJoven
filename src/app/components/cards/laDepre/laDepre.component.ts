import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-laDepre',
  templateUrl: './laDepre.component.html',
  styleUrls: ['./laDepre.component.scss'],
})
export class LaDepreComponent extends CardsBase implements OnInit {

  contents:any;
  
  constructor(http:HttpClient) {
    super(http);
  }
  ngOnInit() {
    this.loadContent('la_Depre').subscribe(
      response => this.contents = response
    );
  }

}
