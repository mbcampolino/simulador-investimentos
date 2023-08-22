import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';
import { InputModel } from 'src/app/models/historicData';

@Component({
  selector: 'app-simulate-fixed-investments',
  templateUrl: './simulate-fixed-investments.component.html',
  styleUrls: ['./simulate-fixed-investments.component.scss']
})
export class SimulateFixedInvestmentsComponent {

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService, public activeRoute: ActivatedRoute) {

    ///activedRoute
    if (this.activeRoute.snapshot.queryParamMap.get('initialValue')) {
      this.simulateInvestment(this.getModel())
    }

  }

  getModel() : InputModel {

    var input = new InputModel()

    input.initialValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('initialValue')!!),
    input.dueDate = Number.parseInt(this.activeRoute.snapshot.queryParamMap.get('dueDate')!!),
    input.dueDateType = this.activeRoute.snapshot.queryParamMap.get('dueDateType')!!,
    input.taxType =  this.activeRoute.snapshot.queryParamMap.get('taxType')!!,
    input.taxValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('taxValue')!!),
    input.monthlyValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('monthlyValue')!!)

    return input
  }

  simulateInvestment(model: InputModel) {

    this.fixedService.model = model

    this.router.navigateByUrl(
      'resultado?initialValue='+model.initialValue+
      '&monthlyValue='+model.monthlyValue+
      '&dueDateType='+model.dueDateType+
      '&taxType='+model.taxType+
      '&taxValue='+ model.taxValue+
      '&dueDate='+model.dueDate
    );
  }

  updateTax(taxPerMonth : boolean) {
    this.fixedService.model.taxType = taxPerMonth ? "mês" : "ano"
  }

  updateInvestmentTime(dueDateType:boolean) {
    this.fixedService.model.dueDateType = dueDateType ? "mês" : "ano"
  }

}
