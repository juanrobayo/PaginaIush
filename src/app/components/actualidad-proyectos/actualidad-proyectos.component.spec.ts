import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualidadProyectosComponent } from './actualidad-proyectos.component';

describe('ActualidadProyectosComponent', () => {
  let component: ActualidadProyectosComponent;
  let fixture: ComponentFixture<ActualidadProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualidadProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualidadProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
