import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YaNoAguantoComponent } from './yaNoAguanto.component';

describe('YaNoAguantoComponent', () => {
  let component: YaNoAguantoComponent;
  let fixture: ComponentFixture<YaNoAguantoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaNoAguantoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YaNoAguantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
