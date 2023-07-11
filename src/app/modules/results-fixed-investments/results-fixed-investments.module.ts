import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsFixedInvestmentsRoutingModule } from './results-fixed-investments-routing.module';
import { ResultsFixedInvestmentsComponent } from './results-fixed-investments.component';
import { TableInvestmentsComponent } from 'src/app/components/table-investments/table-investments.component';


@NgModule({
  declarations: [
    ResultsFixedInvestmentsComponent,
    TableInvestmentsComponent
  ],
  imports: [
    CommonModule,
    ResultsFixedInvestmentsRoutingModule
  ]
})
export class ResultsFixedInvestmentsModule { }
