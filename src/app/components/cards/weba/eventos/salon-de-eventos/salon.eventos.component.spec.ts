import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalonEventosComponent } from './salon.eventos.component';

describe('EventosComponent', () => {
  let component: SalonEventosComponent;
  let fixture: ComponentFixture<SalonEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonEventosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalonEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
