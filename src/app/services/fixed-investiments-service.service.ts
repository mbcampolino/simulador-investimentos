import { Injectable } from '@angular/core';
import { InvestmentModel } from '../models/InvestmentModel';
import { HistoricData } from '../models/historicData';

@Injectable({
  providedIn: 'root'
})
export class FixedInvestimentsServiceService {

  total: number = 0 /// total acumulado
  lastMonthTax: number = 0 /// ultimo rendimento mensal

  model: InvestmentModel = {
    initialValue: 100000,
    dueDate: 12,
    dueDateType: "per-month",
    taxType: "per-month",
    taxValue: 1,
    monthlyValue: 1000
  }

  historicData: HistoricData[] = []

  calcFixedInvestment() {

    this.historicData = []

    // if (this.model.dueDateType == "per-year") {
    //   this.model.dueDate = this.model.dueDate * 12
    // }

    // if (this.model.taxType == "per-year") {
    //   this.model.taxValue = this.model.taxValue / 12
    // }


    for (var i : number = 0 ; i < this.model.dueDate; i++) {

      if (i===0) {
        var data : HistoricData = {
          'currentMonth' : 0,
          'currentTax' : 0,
          'currentTotalWithTax' : this.model.initialValue,
          'currentTotalWithoutTax' : this.model.initialValue,
          'totalTax': 0
        }
        this.historicData.push(data)
      } else {

        var currentTax = (this.historicData[i-1].currentTotalWithTax / 100) * this.model.taxValue
        var currentTotalWithTax = (this.historicData[i-1].currentTotalWithTax + currentTax) + this.model.monthlyValue
        var totalTax = currentTax + this.historicData[i-1].totalTax;

        var currentTotalWithoutTax = (this.historicData[i-1].currentTotalWithoutTax) + this.model.monthlyValue

        var data : HistoricData = {
          'currentMonth' : i,
          'currentTax' : currentTax,
          'currentTotalWithTax' : currentTotalWithTax,
          'currentTotalWithoutTax' : currentTotalWithoutTax,
          'totalTax': totalTax
        }
        this.historicData.push(data)
      }
    }

    console.log(this.historicData)

  }

  formatValue(number:number, showSign: boolean = true) {
    if (showSign) {
      return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    return number.toLocaleString('pt-br');
  }

  constructor() {
  }
}
