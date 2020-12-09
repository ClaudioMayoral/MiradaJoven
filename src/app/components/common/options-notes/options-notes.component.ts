import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PathRoute } from '../article/article.component';

@Component({
  selector: 'app-options-notes',
  templateUrl: './options-notes.component.html',
  styleUrls: ['./options-notes.component.scss']
})
export class OptionsNotesComponent implements OnInit {

  @Input() path_routes:PathRoute[];
  @Input() current_route:string;
  @Input() contents:any[];

  constructor() { }

  ngOnInit(): void {}

}
