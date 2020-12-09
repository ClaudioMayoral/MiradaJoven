import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { take,map } from 'rxjs/operators';

@Component({
  selector: 'app-visit-counter',
  templateUrl: './visit-counter.component.html',
  styleUrls: ['./visit-counter.component.scss']
})
export class VisitCounterComponent implements OnInit {

  @Input() endAt = 100;
  @Input() interval = 1000;
  currentValue = 0;
  currentState:string = 'ready';
  private currentSubscription: Subscription;

  constructor(private changeDetector:ChangeDetectorRef) { }

  public start() {
    this.currentValue = 0;
    this.changeDetector.detectChanges();
    const t: Observable<number> = interval(this.interval);
    this.currentSubscription = t.pipe(
      map(v => 1 + (v + 200000))).subscribe(v => {
        if(this.currentValue >= this.endAt){
          this.stop();
        }else{
          this.currentState = "started";
          this.currentValue += v;
          this.changeDetector.detectChanges();
        }
      }, () => {
        this.currentState = "completed";
        this.currentSubscription.unsubscribe();
        this.currentValue = 0;
        this.changeDetector.detectChanges();
      });
  }

  public stop(){
    this.currentState = "stoped";
    this.currentValue = this.endAt;
    this.currentSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
