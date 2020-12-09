import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-noAndoAl100',
  templateUrl: './noAndoAl100.component.html',
  styleUrls: ['./noAndoAl100.component.scss'],
})
export class NoAndoAl100Component extends CardsBase implements OnInit {

  contents:any;
  
  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('no_ando_al_100').subscribe(
      response => this.contents = response
    );
  }

}
