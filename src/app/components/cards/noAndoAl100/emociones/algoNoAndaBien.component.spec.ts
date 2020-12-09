import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlgoNoAndaBienComponent } from './emociones.component';

describe('AlgoNoAndaBienComponent', () => {
  let component: AlgoNoAndaBienComponent;
  let fixture: ComponentFixture<AlgoNoAndaBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoNoAndaBienComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlgoNoAndaBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
