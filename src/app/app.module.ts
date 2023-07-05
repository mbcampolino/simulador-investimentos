import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimuladorRendaFixaComponent } from './simulador-renda-fixa/simulador-renda-fixa.component';

@NgModule({
  declarations: [
    AppComponent,
    SimuladorRendaFixaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
