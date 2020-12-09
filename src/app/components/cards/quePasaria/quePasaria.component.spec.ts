import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuePasariaComponent } from './quePasaria.component';

describe('QuePasariaComponent', () => {
  let component: QuePasariaComponent;
  let fixture: ComponentFixture<QuePasariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuePasariaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuePasariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
