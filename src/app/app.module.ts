import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ResultsFixedInvestmentsComponent } from './pages/results-fixed-investments/results-fixed-investments.component';
import { SimulateFixedInvestmentsComponent } from './pages/simulate-fixed-investments/simulate-fixed-investments.component';
import { TableInvestmentsComponent } from './shared/components/table-investments/table-investments.component';
import { SwitchContextComponent } from './shared/components/switch-context/switch-context.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    ResultsFixedInvestmentsComponent,
    TableInvestmentsComponent,
    SimulateFixedInvestmentsComponent,
    SwitchContextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
