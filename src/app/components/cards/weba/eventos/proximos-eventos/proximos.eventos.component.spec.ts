import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProximosEventosComponent } from './proximos.eventos.component';

describe('EventosComponent', () => {
  let component: ProximosEventosComponent;
  let fixture: ComponentFixture<ProximosEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosEventosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProximosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
