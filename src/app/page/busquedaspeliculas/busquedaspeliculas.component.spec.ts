import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaspeliculasComponent } from './busquedaspeliculas.component';

describe('BusquedaspeliculasComponent', () => {
  let component: BusquedaspeliculasComponent;
  let fixture: ComponentFixture<BusquedaspeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaspeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaspeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
