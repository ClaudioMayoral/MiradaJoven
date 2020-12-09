import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasculinidadesComponent } from './masculinidades.component';

describe('MasculinidadesComponent', () => {
  let component: MasculinidadesComponent;
  let fixture: ComponentFixture<MasculinidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasculinidadesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasculinidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
