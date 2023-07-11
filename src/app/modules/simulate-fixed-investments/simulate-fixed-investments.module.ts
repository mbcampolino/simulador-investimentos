import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulateFixedInvestmentsRoutingModule } from './simulate-fixed-investments-routing.module';
import { SimulateFixedInvestmentsComponent } from './simulate-fixed-investments.component';
import { SwitchContextComponent } from 'src/app/components/switch-context/switch-context.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    SimulateFixedInvestmentsComponent,
    SwitchContextComponent,
  ],
  imports: [
    CommonModule,
    SimulateFixedInvestmentsRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ]
})
export class SimulateFixedInvestmentsModule { }
