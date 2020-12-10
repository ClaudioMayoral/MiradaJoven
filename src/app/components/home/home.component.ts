import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { DataTree } from 'src/app/data/data-tree';
import { DataTreeNahua } from 'src/app/data/data-treenahua';
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
  cards;

  lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
  
  
  

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
  
  constructor(private render:Renderer2) {
    //Configuracion para elegir el lenguaje
    this.lenguaje =  (String)(localStorage.getItem('lang') || 'esp');
    if(this.lenguaje == 'esp'){
      this.cards = DataTree.main;
    }else{
      this.cards = DataTreeNahua.main;
    }
   }

  ngAfterViewInit(): void {
     
  }

  ngOnInit(): void {

  }



  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

}
