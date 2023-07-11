import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: 'simular', pathMatch: 'full'
  },
  {
    path: 'simular',
    loadChildren: () => import('./modules/simulate-fixed-investments/simulate-fixed-investments.module').then(m => m.SimulateFixedInvestmentsModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./modules/results-fixed-investments/results-fixed-investments.module').then(m => m.ResultsFixedInvestmentsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
