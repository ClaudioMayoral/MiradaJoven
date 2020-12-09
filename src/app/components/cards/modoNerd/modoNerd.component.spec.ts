import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModoNerdComponent } from './modoNerd.component';

describe('ModoNerdComponent', () => {
  let component: ModoNerdComponent;
  let fixture: ComponentFixture<ModoNerdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoNerdComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModoNerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
