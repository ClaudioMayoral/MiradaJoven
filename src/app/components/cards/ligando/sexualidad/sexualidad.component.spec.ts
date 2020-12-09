import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SexualidadComponent } from './sexualidad.component';

describe('SexualidadComponent', () => {
  let component: SexualidadComponent;
  let fixture: ComponentFixture<SexualidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexualidadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SexualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
