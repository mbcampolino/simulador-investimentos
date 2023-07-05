import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateFixedInvestmentsComponent } from './simulate-fixed-investments.component';

describe('SimulateFixedInvestmentsComponent', () => {
  let component: SimulateFixedInvestmentsComponent;
  let fixture: ComponentFixture<SimulateFixedInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimulateFixedInvestmentsComponent]
    });
    fixture = TestBed.createComponent(SimulateFixedInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
