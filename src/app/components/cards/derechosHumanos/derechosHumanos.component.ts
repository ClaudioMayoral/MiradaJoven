import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-derechosHumanos',
  templateUrl: './derechosHumanos.component.html',
  styleUrls: ['./derechosHumanos.component.scss'],
})
export class DerechosHumanosComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('derechos_humanos').subscribe(
      response => this.contents = response
    );
  }

}
