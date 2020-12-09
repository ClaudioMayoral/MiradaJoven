import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmocionesComponent } from './emociones.component';

describe('EmocionesComponent', () => {
  let component: EmocionesComponent;
  let fixture: ComponentFixture<EmocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmocionesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
