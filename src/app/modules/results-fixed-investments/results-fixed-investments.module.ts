import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsFixedInvestmentsRoutingModule } from './results-fixed-investments-routing.module';
import { ResultsFixedInvestmentsComponent } from './results-fixed-investments.component';
import { TableInvestmentsComponent } from 'src/app/components/table-investments/table-investments.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResultsFixedInvestmentsComponent,
    TableInvestmentsComponent
  ],
  imports: [
    CommonModule,
    ResultsFixedInvestmentsRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ]
})
export class ResultsFixedInvestmentsModule { }
