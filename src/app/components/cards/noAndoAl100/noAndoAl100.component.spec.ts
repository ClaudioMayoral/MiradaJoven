import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAndoAl100Component } from './noAndoAl100.component';

describe('NoAndoAl100Component', () => {
  let component: NoAndoAl100Component;
  let fixture: ComponentFixture<NoAndoAl100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAndoAl100Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAndoAl100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
