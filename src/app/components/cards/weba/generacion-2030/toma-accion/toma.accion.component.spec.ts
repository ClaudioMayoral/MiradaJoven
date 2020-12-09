import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomaAccionComponent } from './toma.accion.component';

describe('EventosComponent', () => {
  let component: TomaAccionComponent;
  let fixture: ComponentFixture<TomaAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomaAccionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomaAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
