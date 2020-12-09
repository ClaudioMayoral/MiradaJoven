import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViolenciaGeneroComponent } from './violencia-genero.component';

describe('ViolenciaGeneroComponent', () => {
  let component: ViolenciaGeneroComponent;
  let fixture: ComponentFixture<ViolenciaGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaGeneroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViolenciaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
