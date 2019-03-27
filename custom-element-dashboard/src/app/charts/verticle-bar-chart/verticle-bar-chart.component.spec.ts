import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleBarChartComponent } from './verticle-bar-chart.component';

describe('VerticleBarChartComponent', () => {
  let component: VerticleBarChartComponent;
  let fixture: ComponentFixture<VerticleBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticleBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticleBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
