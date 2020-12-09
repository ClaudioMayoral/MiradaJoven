import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-escuchado',
  templateUrl: './escuchado.component.html',
  styleUrls: ['./escuchado.component.scss'],
})
export class EscuchadoComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('ignoradx').subscribe(
      response => this.contents = response
    );
  }

}
