import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasPComponent } from './lineas-p.component';

describe('LineasPComponent', () => {
  let component: LineasPComponent;
  let fixture: ComponentFixture<LineasPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineasPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
