import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfeccionesTransmisionSexualComponent } from './infecciones-transmision-sexual.component';

describe('InfeccionesTransmisionSexualComponent', () => {
  let component: InfeccionesTransmisionSexualComponent;
  let fixture: ComponentFixture<InfeccionesTransmisionSexualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfeccionesTransmisionSexualComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfeccionesTransmisionSexualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
