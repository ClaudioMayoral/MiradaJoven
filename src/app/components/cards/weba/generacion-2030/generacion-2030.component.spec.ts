import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Generacion2030Component } from './generacion-2030.component';

describe('Generacion2030Component', () => {
  let component: Generacion2030Component;
  let fixture: ComponentFixture<Generacion2030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generacion2030Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Generacion2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
