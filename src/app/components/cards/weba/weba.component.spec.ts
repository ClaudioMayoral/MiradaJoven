import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebaComponent } from './weba.component';

describe('WebaComponent', () => {
  let component: WebaComponent;
  let fixture: ComponentFixture<WebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
