import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFixedInvestmentsComponent } from './results-fixed-investments.component';

describe('ResultsFixedInvestmentsComponent', () => {
  let component: ResultsFixedInvestmentsComponent;
  let fixture: ComponentFixture<ResultsFixedInvestmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsFixedInvestmentsComponent]
    });
    fixture = TestBed.createComponent(ResultsFixedInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
