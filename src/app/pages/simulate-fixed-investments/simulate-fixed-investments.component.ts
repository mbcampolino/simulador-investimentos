import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

@Component({
  selector: 'app-simulate-fixed-investments',
  templateUrl: './simulate-fixed-investments.component.html',
  styleUrls: ['./simulate-fixed-investments.component.scss']
})
export class SimulateFixedInvestmentsComponent {

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService) {}

  simulateInvestment() {
    this.router.navigate(['resultado', {
      initialValue: this.fixedService.model.initialValue,
      monthlyValue: this.fixedService.model.monthlyValue,
      dueDateType: this.fixedService.model.dueDateType,
      taxType: this.fixedService.model.taxType,
      taxValue: this.fixedService.model.taxValue,
      dueDate: this.fixedService.model.dueDate,
    }]);
  }

  updateTax(taxPerMonth : boolean) {
    this.fixedService.model.taxType = taxPerMonth ? "mês" : "ano"
    console.log("taxPerMonth" + this.fixedService.model.taxType)
  }

  updateInvestmentTime(dueDateType:boolean) {
    this.fixedService.model.dueDateType = dueDateType ? "mês" : "ano"
    console.log("dueDateType" + this.fixedService.model.dueDateType)
  }

}
