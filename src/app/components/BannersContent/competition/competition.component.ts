
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { VisitCounterComponent } from '../../common/visit-counter/visit-counter.component';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit,AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {}

  ngOnInit(): void {

  }
}

