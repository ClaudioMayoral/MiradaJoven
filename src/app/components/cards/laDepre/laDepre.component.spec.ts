import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaDepreComponent } from './laDepre.component';

describe('LaDepreComponent', () => {
  let component: LaDepreComponent;
  let fixture: ComponentFixture<LaDepreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaDepreComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaDepreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
