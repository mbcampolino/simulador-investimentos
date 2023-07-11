import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsFixedInvestmentsComponent } from './results-fixed-investments.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsFixedInvestmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsFixedInvestmentsRoutingModule { }
