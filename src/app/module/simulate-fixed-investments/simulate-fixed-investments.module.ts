import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulateFixedInvestmentsRoutingModule } from './simulate-fixed-investments-routing.module';
import { SimulateFixedInvestmentsComponent } from './simulate-fixed-investments.component';


@NgModule({
  declarations: [
    SimulateFixedInvestmentsComponent
  ],
  imports: [
    CommonModule,
    SimulateFixedInvestmentsRoutingModule
  ]
})
export class SimulateFixedInvestmentsModule { }
