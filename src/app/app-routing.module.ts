import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulateFixedInvestmentsComponent } from './module/simulate-fixed-investments/simulate-fixed-investments.component';
import { ResultsFixedInvestmentsComponent } from './module/results-fixed-investments/results-fixed-investments.component';

const routes: Routes = [

  {
    path: '',
    component : SimulateFixedInvestmentsComponent
  },
  {
    path: 'results',
    component : ResultsFixedInvestmentsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
