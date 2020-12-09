import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModoCachondoComponent } from './modo-cachondo.component';

describe('ModoCachondoComponent', () => {
  let component: ModoCachondoComponent;
  let fixture: ComponentFixture<ModoCachondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoCachondoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModoCachondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
