import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosFormulariosComponent } from './requisitos-formularios.component';

describe('RequisitosFormulariosComponent', () => {
  let component: RequisitosFormulariosComponent;
  let fixture: ComponentFixture<RequisitosFormulariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitosFormulariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitosFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
