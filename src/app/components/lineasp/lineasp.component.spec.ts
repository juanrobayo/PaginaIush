import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaspComponent } from './lineasp.component';

describe('LineaspComponent', () => {
  let component: LineaspComponent;
  let fixture: ComponentFixture<LineaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
