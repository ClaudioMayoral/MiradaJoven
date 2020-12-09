import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface PathRoute{
  title:string;
  route:string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() bg_color:string;
  @Input() content:any;
  @Input() path_routes:PathRoute[];
  @Input() current_route:string;
  current:string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.current = window.location.href;
    const info = document.getElementById("article-content");
    info.innerHTML = this.content.content;
  }

}
