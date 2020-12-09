import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-adicciones',
  templateUrl: './adicciones.component.html',
  styleUrls: ['./adicciones.component.scss'],
})
export class AdiccionesComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('adicciones').subscribe(
      data => this.contents = data
    );
  }

}
