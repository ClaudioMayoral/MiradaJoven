import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmorYRelacionComponent } from './amor-yrelacion.component';

describe('AmorYRelacionComponent', () => {
  let component: AmorYRelacionComponent;
  let fixture: ComponentFixture<AmorYRelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmorYRelacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmorYRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
