import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPizzaComponent } from './abm-pizza.component';

describe('AbmPizzaComponent', () => {
  let component: AbmPizzaComponent;
  let fixture: ComponentFixture<AbmPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
