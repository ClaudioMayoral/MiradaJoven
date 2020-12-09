import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConoceTuCuerpoComponent } from './conoce-tu-cuerpo.component';

describe('ConoceTuCuerpoComponent', () => {
  let component: ConoceTuCuerpoComponent;
  let fixture: ComponentFixture<ConoceTuCuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoceTuCuerpoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConoceTuCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
