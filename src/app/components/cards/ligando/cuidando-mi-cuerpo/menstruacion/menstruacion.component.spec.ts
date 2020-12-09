import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenstruacionComponent } from './menstruacion.component';

describe('MenstruacionComponent', () => {
  let component: MenstruacionComponent;
  let fixture: ComponentFixture<MenstruacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenstruacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenstruacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
