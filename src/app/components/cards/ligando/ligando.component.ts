import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-ligando',
  templateUrl: './ligando.component.html',
  styleUrls: ['./ligando.component.scss'],
})
export class LigandoComponent implements OnInit {

  cards = DataTree.ligando;
  
  constructor() { }

  ngOnInit() {}

}
