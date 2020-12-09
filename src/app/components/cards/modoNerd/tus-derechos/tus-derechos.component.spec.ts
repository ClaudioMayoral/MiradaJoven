import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TusDerechosComponent } from './tus-derechos.component';

describe('TusDerechosComponent', () => {
  let component: TusDerechosComponent;
  let fixture: ComponentFixture<TusDerechosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusDerechosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TusDerechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
