import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscuchadoComponent } from './escuchado.component';

describe('EscuchadoComponent', () => {
  let component: EscuchadoComponent;
  let fixture: ComponentFixture<EscuchadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuchadoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscuchadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
