import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DerechosHumanosComponent } from './derechosHumanos.component';

describe('DerechosHumanosComponent', () => {
  let component: DerechosHumanosComponent;
  let fixture: ComponentFixture<DerechosHumanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerechosHumanosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DerechosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
