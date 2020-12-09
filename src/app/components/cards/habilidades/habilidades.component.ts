import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('habilidades').subscribe(
      response => this.contents = response
    );
  }

}
