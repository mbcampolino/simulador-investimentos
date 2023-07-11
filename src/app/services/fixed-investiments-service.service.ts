import { Injectable } from '@angular/core';
import { InvestmentModel } from '../models/InvestmentModel';
import { HistoricData } from '../models/historicData';

@Injectable({
  providedIn: 'root'
})
export class FixedInvestimentsServiceService {

  total: number = 0 /// total acumulado
  lastMonthTax: number = 0 /// ultimo rendimento mensal

  taxesByMonth = true
  investimentsByMonth = false

  model: InvestmentModel = {
    initialValue: 100000,
    dueDate: 1,
    dueDateType: "ano",
    taxType: "mês",
    taxValue: 1,
    monthlyValue: 1000
  }

  historicData: HistoricData[] = []

  calcFixedInvestment() {

    this.historicData = []

    var currentDueDate: number = 0
    var currentTaxValue: number = 0

    if (this.model.dueDateType == "ano") {
      currentDueDate = this.model.dueDate * 13
    } else {
      currentDueDate = this.model.dueDate + 1
    }

    if (this.model.taxType == "ano") {
      currentTaxValue = this.model.taxValue / 12
    } else {
      currentTaxValue = this.model.taxValue
    }

    for (var i : number = 0 ; i < currentDueDate; i++) {

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

        var currentTax = (this.historicData[i-1].currentTotalWithTax / 100) * currentTaxValue
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
      return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2, currencyDisplay: 'narrowSymbol'});
    }

    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: "code"
    })
    .format(number)
    .replace("EUR", "")
    .trim()
  }

  constructor() {
  }
}
