import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValerTusDerechosComponent } from './valer-tus-derechos.component';

describe('ValerTusDerechosComponent', () => {
  let component: ValerTusDerechosComponent;
  let fixture: ComponentFixture<ValerTusDerechosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValerTusDerechosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValerTusDerechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
