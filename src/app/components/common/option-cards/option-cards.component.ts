import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathRoute } from '../article/article.component';

export type Card = {
  title:string;
  icon:string;
  route:any;
  content:string;
  bgColor?:string;
  enabled?:boolean;
}

@Component({
  selector: 'app-option-cards',
  templateUrl: './option-cards.component.html',
  styleUrls: ['./option-cards.component.scss'],
})
export class OptionCardsComponent implements OnInit {

  @Input() header:string;
  @Input() data:Card[] = [];
  @Input() path_routes:PathRoute[];
  @Input() current_route:string;
  showBack = false;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe( url => {
      if(url[0].path != 'home'){
        this.showBack = true;
      }else{
        this.showBack = false;
      }
    });
  }

}
