import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprendeComponent } from './aprende.component';

describe('EventosComponent', () => {
  let component: AprendeComponent;
  let fixture: ComponentFixture<AprendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
