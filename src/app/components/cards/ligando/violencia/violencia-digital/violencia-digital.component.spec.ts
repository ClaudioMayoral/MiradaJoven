import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViolenciaDigitalComponent } from './violencia-digital.component';

describe('ViolenciaDigitalComponent', () => {
  let component: ViolenciaDigitalComponent;
  let fixture: ComponentFixture<ViolenciaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaDigitalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViolenciaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
