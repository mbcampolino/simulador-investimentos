import { InvestmentModel } from './../../models/InvestmentModel';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

@Component({
  selector: 'app-simulate-fixed-investments',
  templateUrl: './simulate-fixed-investments.component.html',
  styleUrls: ['./simulate-fixed-investments.component.scss']
})
export class SimulateFixedInvestmentsComponent {

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService) {
    console.log(fixedService.model.dueDateType)
    console.log(fixedService.model.taxType)
  }

  simulateInvestment() {
    this.router.navigate(['resultado']);
  }

  updateTax(taxPerMonth:boolean) {
    this.fixedService.model.taxType = taxPerMonth ? "mês" : "ano"
    console.log("taxPerMonth" + this.fixedService.model.taxType)
  }

  updateInvestmentTime(dueDateType:boolean) {
    this.fixedService.model.dueDateType = dueDateType ? "mês" : "ano"
    console.log("dueDateType" + this.fixedService.model.dueDateType)
  }

}
