import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaHistoricaComponent } from './resena-historica.component';

describe('ResenaHistoricaComponent', () => {
  let component: ResenaHistoricaComponent;
  let fixture: ComponentFixture<ResenaHistoricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaHistoricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
