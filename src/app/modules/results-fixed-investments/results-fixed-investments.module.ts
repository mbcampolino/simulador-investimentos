import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsFixedInvestmentsRoutingModule } from './results-fixed-investments-routing.module';
import { ResultsFixedInvestmentsComponent } from './results-fixed-investments.component';


@NgModule({
  declarations: [
    ResultsFixedInvestmentsComponent
  ],
  imports: [
    CommonModule,
    ResultsFixedInvestmentsRoutingModule
  ]
})
export class ResultsFixedInvestmentsModule { }
