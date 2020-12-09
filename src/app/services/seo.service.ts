import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  updateMetaInfo(content?:string, author?:string, category?:string) {
    this.meta.updateTag({ name: 'description', content: content?content:'' });
    this.meta.updateTag({ name: 'author', content: author?author:'' });
    this.meta.updateTag({ name: 'keywords', content: category?category:'' });
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
  }

  updateTitle(title?: string) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
            return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)).subscribe((event) => {
          if(event['title']){
            this.titleService.setTitle(event['title'] + ' - Mirada Joven');
          }else{
            this.titleService.setTitle('Mirada Joven');
          }
          this.updateMetaInfo(event['description'],'Mirada Joven','Mirada Joven');      
        });
  }
}
