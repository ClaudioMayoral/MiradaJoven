import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuidandoMiCuerpo } from './cuidando-mi-cuerpo.component';

describe('CuidandoMiCuerpo', () => {
  let component: CuidandoMiCuerpo;
  let fixture: ComponentFixture<CuidandoMiCuerpo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidandoMiCuerpo ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuidandoMiCuerpo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
