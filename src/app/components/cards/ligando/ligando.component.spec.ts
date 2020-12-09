import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigandoComponent } from './ligando.component';

describe('LigandoComponent', () => {
  let component: LigandoComponent;
  let fixture: ComponentFixture<LigandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigandoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
