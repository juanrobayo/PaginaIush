import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSemilleroComponent } from './panel-semillero.component';

describe('PanelSemilleroComponent', () => {
  let component: PanelSemilleroComponent;
  let fixture: ComponentFixture<PanelSemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSemilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
