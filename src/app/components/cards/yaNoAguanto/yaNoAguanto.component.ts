import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../cards.base';

@Component({
  selector: 'app-yaNoAguanto',
  templateUrl: './yaNoAguanto.component.html',
  styleUrls: ['./yaNoAguanto.component.scss'],
})
export class YaNoAguantoComponent extends CardsBase implements OnInit {

  contents:any;
  
  constructor(http:HttpClient) {
    super(http);
 }
  ngOnInit() {
    this.loadContent('ya_No_aguanto').subscribe(
      data => this.contents = data
  );
  }

}
