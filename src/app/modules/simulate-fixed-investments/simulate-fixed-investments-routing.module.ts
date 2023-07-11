import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulateFixedInvestmentsComponent } from './simulate-fixed-investments.component';

const routes: Routes = [
  {
    path: '',
    component: SimulateFixedInvestmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulateFixedInvestmentsRoutingModule { }
