import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Ally{
  title:string;
  description:string;
  icon:string;
  url:string;
}

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.scss']
})
export class AliadosComponent implements OnInit {

  alliesList:Ally[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("../assets/aliados/aliados.json").subscribe(
      (data:any) => this.alliesList = data.allies
    );
  }

}
