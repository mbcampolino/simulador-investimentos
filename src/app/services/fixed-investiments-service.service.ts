import { InputModel } from './../models/historicData';
import { Injectable } from '@angular/core';
import { InvestmentModel } from '../models/InvestmentModel';
import { HistoricData } from '../models/historicData';
import { HttpClient } from '@angular/common/http';
import { SelicArray } from './../models/SelicArray';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FixedInvestimentsServiceService {

  model = new InputModel()

  total: number = 0 /// total acumulado
  lastMonthTax: number = 0 /// ultimo rendimento mensal
  currentSelic: number = 0
  investimentsByMonth = false

  constructor(private httpClient: HttpClient) {

    var backend = "/api/servico/sitebcb/historicotaxasjuros"
    //var mock = "./../../assets/mock/mockselic.json"
    this.getApiSelic(backend)
  }

  calcFixedInvestment(inputModel: InputModel) : HistoricData[] {

    var historicData = []

    var currentDueDate: number = 0
    var currentTaxValue: number = 0

    if (inputModel.dueDateType == "ano") {
      currentDueDate = (inputModel.dueDate) * 12
    } else {
      currentDueDate = inputModel.dueDate
    }

    if (inputModel.taxType == "ano") {
      currentTaxValue = inputModel.taxValue / 12
    } else {
      currentTaxValue = inputModel.taxValue
    }

    for (var i : number = 0 ; i < currentDueDate + 1; i++) {

      if (i===0) {
        var data : HistoricData = {
          'currentMonth' : this.returnDate(i, inputModel.initialDate),
          'currentTax' : 0,
          'currentTotalWithTax' : inputModel.initialValue,
          'currentTotalWithoutTax' : inputModel.initialValue,
          'totalTax': 0,
          'monthInvestment': 0
        }
        historicData.push(data)
      } else {

        var currentTax = (historicData[i-1].currentTotalWithTax / 100) * currentTaxValue

        var totalTax = currentTax + historicData[i-1].totalTax;

        var currentTotalWithTax = (historicData[i-1].currentTotalWithTax + currentTax) + inputModel.monthlyValue
        var currentTotalWithoutTax = (historicData[i-1].currentTotalWithoutTax) + inputModel.monthlyValue

        var data : HistoricData = {
          'currentMonth' : this.returnDate(i, inputModel.initialDate),
          'currentTax' : currentTax,
          'currentTotalWithTax' : currentTotalWithTax,
          'currentTotalWithoutTax' : currentTotalWithoutTax,
          'totalTax': totalTax,
          'monthInvestment': inputModel.monthlyValue
        }

        historicData.push(data)
      }
    }

    return historicData

  }

  recalculateInvestedValue(historic: HistoricData[], editedIndex: number, newValue: number, inputModel: InputModel = this.model): HistoricData[] {
    if (!historic || historic.length === 0) {
      return []
    }

    const config = inputModel ?? this.model
    const monthlyTax = config.taxType === 'ano' ? config.taxValue / 12 : config.taxValue
    const recalculated = historic.map(item => ({ ...item }))

    if (editedIndex < 0 || editedIndex >= recalculated.length) {
      return recalculated
    }

    recalculated[editedIndex].monthInvestment = Number(newValue)

    const initialValue = config.initialValue ?? 0
    recalculated[0] = {
      ...recalculated[0],
      currentMonth: this.returnDate(0, config.initialDate),
      currentTax: 0,
      currentTotalWithTax: initialValue,
      currentTotalWithoutTax: initialValue,
      totalTax: 0,
      monthInvestment: 0
    }

    for (let i = 1; i < recalculated.length; i++) {
      const previous = recalculated[i - 1]
      const monthInvestment = recalculated[i].monthInvestment ?? config.monthlyValue
      const currentTax = (previous.currentTotalWithTax / 100) * monthlyTax
      const totalTax = previous.totalTax + currentTax
      const currentTotalWithoutTax = previous.currentTotalWithoutTax + monthInvestment
      const currentTotalWithTax = previous.currentTotalWithTax + currentTax + monthInvestment

      recalculated[i] = {
        ...recalculated[i],
        currentMonth: this.returnDate(i, config.initialDate),
        currentTax,
        currentTotalWithoutTax,
        totalTax,
        currentTotalWithTax,
        monthInvestment: monthInvestment
      }
    }

    return recalculated
  }

  returnDate(pos: number, initialDate: string) : string {
    var today = new Date(initialDate)
    var date = new Date(today.setMonth(today.getMonth() + pos)).toISOString()
    //console.log(date)
    return date
  }

  getTotalCalculed(tax: number, valueTotal: number, months: number, dueDateType: string) {

    if (dueDateType == "ano") {
      months = months * 12
    }

    var taxByMonth = this.getTotalWithImpost(months * 30)
    var x = (tax/100) * taxByMonth

    return this.formatValue(valueTotal - x, true) + ' (descontando impostos -' + this.getTotalWithImpost(months * 30) + '%)'
  }

  getTotalWithImpost(days: number) {
    if (days > 720) {
      return 15
    } else if (days >= 361 && days <= 720 ) {
      return 17.5
    } else if (days >= 181 && days <= 360 ) {
      return 20
    } else if (days <= 180) {
      return 22.5
    }
    return 0
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


  getApiSelic(url : string) {

    const HEADERS = {
      'Accept': 'application/json',
      'withCredentials':'true',
      'Access-Control-Allow-Origin':'*'
    }

    const options = { headers: HEADERS };


    return this.httpClient.get<SelicArray>(url,options).subscribe(
      {
        next: (result: SelicArray) => {
          var selic = Number(Number(result.conteudo[0].MetaSelic).toFixed(2));
          this.currentSelic = selic
        },
        error: (err: Error) => {
          this.currentSelic = 0
          console.log(err)
        }
      }
    )
  }

}
