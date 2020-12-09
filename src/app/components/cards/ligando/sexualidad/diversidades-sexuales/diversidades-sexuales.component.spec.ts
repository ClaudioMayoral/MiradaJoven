import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiversidadesSexualesComponent } from './diversidades-sexuales.component';

describe('DiversidadesSexualesComponent', () => {
  let component: DiversidadesSexualesComponent;
  let fixture: ComponentFixture<DiversidadesSexualesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversidadesSexualesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiversidadesSexualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
