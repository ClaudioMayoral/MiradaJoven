import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprendeCosasChidasComponent } from './aprendeCosasChidas.component';

describe('AprendeCosasChidasComponent', () => {
  let component: AprendeCosasChidasComponent;
  let fixture: ComponentFixture<AprendeCosasChidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprendeCosasChidasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprendeCosasChidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
