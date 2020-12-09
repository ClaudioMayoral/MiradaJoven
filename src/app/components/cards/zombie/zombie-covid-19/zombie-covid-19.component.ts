import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { CardsBase } from '../../cards.base';

@Component({
  selector: 'app-zombie-covid-19',
  templateUrl: './zombie-covid-19.component.html',
  styleUrls: ['./zombie-covid-19.component.scss'],
})
export class ZombieCovid19Component extends CardsBase  implements OnInit {
    
    contents:any;
    path:PathRoute[];
  
    constructor(http:HttpClient) {
        super(http);
     }

    ngOnInit() {
        this.loadContent('zombie_covid_19').subscribe(
            data => this.contents = data
        );
        this.path = [
        {
            title: "Zombi",
            route: "/como-me-siento/zombi"
        }
        ]
    }
}