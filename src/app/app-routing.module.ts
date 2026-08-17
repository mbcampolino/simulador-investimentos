import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsFixedInvestmentsComponent } from './pages/results-fixed-investments/results-fixed-investments.component';
import { SimulateFixedInvestmentsComponent } from './pages/simulate-fixed-investments/simulate-fixed-investments.component';

const routes: Routes = [

  {
    path: '',
    component: SimulateFixedInvestmentsComponent
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/results-fixed-investments/results-fixed-invetments.module').then(m => m.ResultsFixedInvetmentsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
