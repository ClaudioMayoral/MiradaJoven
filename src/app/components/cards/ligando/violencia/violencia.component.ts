import { Component, OnInit } from '@angular/core';
import  *  as  contents  from  'src/assets/contents/contents.data.json';
import { PathRoute } from 'src/app/components/common/article/article.component';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-violencia',
  templateUrl: './violencia.component.html',
  styleUrls: ['./violencia.component.scss'],
})
export class ViolenciaComponent implements OnInit {

  cards = DataTree.violencia;
  path:PathRoute[];
  
  constructor() { }

  ngOnInit() {
    this.path = [
      {
        title: "Amigxs o novixs",
        route: "/como-me-siento/amigxs-o-novixs"
      }
    ]
  }

}
