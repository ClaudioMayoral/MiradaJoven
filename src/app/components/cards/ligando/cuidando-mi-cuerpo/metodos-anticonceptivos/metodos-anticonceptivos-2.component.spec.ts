import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetodosAnticonceptivos2Component } from './metodos-anticonceptivos-2.component';

describe('MetodosAnticonceptivosComponent', () => {
  let component: MetodosAnticonceptivos2Component;
  let fixture: ComponentFixture<MetodosAnticonceptivos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosAnticonceptivos2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetodosAnticonceptivos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
