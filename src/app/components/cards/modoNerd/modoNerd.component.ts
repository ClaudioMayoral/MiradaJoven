import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-modoNerd',
  templateUrl: './modoNerd.component.html',
  styleUrls: ['./modoNerd.component.scss'],
})
export class ModoNerdComponent implements OnInit {
 
  cards = DataTree.modoNerd;
  
  constructor() { }

  ngOnInit() {}


}
