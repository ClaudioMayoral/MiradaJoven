import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SexoComponent } from './sexo.component';

describe('SexoComponent', () => {
  let component: SexoComponent;
  let fixture: ComponentFixture<SexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
