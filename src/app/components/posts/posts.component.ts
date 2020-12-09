import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WordpressApiService } from 'src/app/services/wordpress-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private categoryId:string;
  private startPage = 1;
  posts:any[] = [];
  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 300;

  constructor(private wp:WordpressApiService, private actiatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actiatedRoute.data.subscribe(
      data => {
        this.categoryId = data.entries[0].id;
        this.wp.getPosts(this.categoryId,this.startPage.toString()).subscribe(
          (response:any) => {
            this.posts = response;
            this.startPage ++;
          }
        );
      }
    );
  }

  onScrollDown(ev:any) {
    // add another 20 items
    this.wp.getPosts(this.categoryId,this.startPage.toString()).subscribe(
      (response:any) => {
        response.forEach((element:any) => {
          this.posts.push(element);
        });
        this.startPage ++;
      },
      error => {}
    );
  }

  onUp(ev:any) {
    console.log('scrolled up!', ev);
  }

}
