import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-algoNoAndaBien',
  templateUrl: './algoNoAndaBien.component.html',
  styleUrls: ['./algoNoAndaBien.component.scss'],
})
export class AlgoNoAndaBienComponent extends CardsBase implements OnInit {

  contents:any;

  constructor(http:HttpClient) {
    super(http);
  }

  ngOnInit() {
    this.loadContent('algo_No_AndaBien').subscribe(
      data => this.contents = data
    );
  }

}
