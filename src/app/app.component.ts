import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { NbSidebarService, NbSidebarComponent } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{

  @ViewChild("sidebar") sidebar:NbSidebarComponent;

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;
  
  title = 'mj-front';

  @HostListener("document:click", ["$event"])
  public onClick(event: any): void {
    if((event.target.id != 'menuBtn') && (event.target.parentElement.dataset.name != 'menu') ){
      if(this.sidebar.expanded){
        this.sidebarService.toggle(false,'rigth');
      }
    }
  }
  
  constructor(private sidebarService: NbSidebarService, private seo:SeoService, private translateService: TranslateService) {
    this.seo.updateTitle();
    this.translateService.setDefaultLang('esp');
    this.translateService.use(localStorage.getItem('lang') || 'esp');
  }

  ngOnInit(): void {
    this.toggle();
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
  
  toggle() {
    this.sidebarService.toggle(false, 'rigth');
  }
}
