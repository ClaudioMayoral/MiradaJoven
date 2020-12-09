import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViolenciaParejaComponent } from './violencia-pareja.component';

describe('ViolenciaParejaComponent', () => {
  let component: ViolenciaParejaComponent;
  let fixture: ComponentFixture<ViolenciaParejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViolenciaParejaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViolenciaParejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
