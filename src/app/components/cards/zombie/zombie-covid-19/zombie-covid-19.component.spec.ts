import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZombieCovid19Component } from './zombie-covid-19.component';

describe('ZombieCovid19Component', () => {
  let component: ZombieCovid19Component;
  let fixture: ComponentFixture<ZombieCovid19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZombieCovid19Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZombieCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
