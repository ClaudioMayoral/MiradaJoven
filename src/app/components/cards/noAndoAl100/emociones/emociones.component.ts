import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-emociones',
  templateUrl: './emociones.component.html',
  styleUrls: ['./emociones.component.scss'],
})
export class EmocionesComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('emociones').subscribe(
      data => this.contents = data
    );
  }

}
