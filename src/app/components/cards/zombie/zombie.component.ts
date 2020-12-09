import { Component, OnInit } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss'],
})
export class ZombieComponent implements OnInit {

cards = DataTree.zombie;
  
  constructor() { }

  ngOnInit() {}

}