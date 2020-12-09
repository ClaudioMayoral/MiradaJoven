import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { VisitCounterComponent } from '../common/visit-counter/visit-counter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild("visitsDiv") visitsDiv:ElementRef;
  @ViewChild('counter', {read:VisitCounterComponent}) private counter: VisitCounterComponent;

  visitCounter = 0;
  cards = DataTree.main;
  images = [1, 2, 3, 4, 5, 6].map((n) => `/assets/carousel/b-${n}.jpg`);
  imagenes = [1, 2, 3].map((n) => `/assets/testimonio/b-${n}.jpg`);

  @HostListener('window:scroll', ['$event']) 
  public onScroll(event:Event) {

    let top = this.visitsDiv.nativeElement.offsetTop;
    let left = this.visitsDiv.nativeElement.offsetLeft;
    const width = this.visitsDiv.nativeElement.offsetWidth;
    const height = this.visitsDiv.nativeElement.offsetHeight;
    
    let el = this.visitsDiv.nativeElement;
    while(el.offsetParent) {
      el = this.visitsDiv.nativeElement.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    if((
      top >= window.pageYOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    )){
      if(this.counter.currentState != 'started'){
        if(this.counter.currentState != 'stoped'){
          this.counter.start();
        }
      }
    }
  }
  
  constructor(private render:Renderer2) { }

  ngAfterViewInit(): void {
     
  }

  ngOnInit(): void {

  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

}
