import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-participando',
  templateUrl: './participando.component.html',
  styleUrls: ['./participando.component.scss'],
})
export class ParticipandoComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
   }

  ngOnInit() {
    this.loadContent('participando').subscribe(
      data => this.contents = data
    );
  }

}
