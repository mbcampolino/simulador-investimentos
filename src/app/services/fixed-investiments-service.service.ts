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

  constructor(private httpClient: HttpClient) {

    var backend = "/api/servico/sitebcb/historicotaxasjuros"
    var mock = "./../../assets/mock/mockselic.json"

    this.getApiSelic(backend)
  }

  // taxesByMonth() {
  //   return this.activeRoute.snapshot.params['taxType'] == "mês"
  // }

  // dueDateTypeByMonth() {
  //   return this.activeRoute.snapshot.params['dueDateType'] == "mês"
  // }

  investimentsByMonth = false

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

    ///console.log(currentTaxValue + " oiii" )

    for (var i : number = 0 ; i < currentDueDate + 1; i++) {

      if (i===0) {
        var data : HistoricData = {
          'currentMonth' : 0,
          'currentTax' : 0,
          'currentTotalWithTax' : inputModel.initialValue,
          'currentTotalWithoutTax' : inputModel.initialValue,
          'totalTax': 0
        }
        historicData.push(data)
      } else {

        var currentTax = (historicData[i-1].currentTotalWithTax / 100) * currentTaxValue

        var totalTax = currentTax + historicData[i-1].totalTax;

        //console.log(historicData[i-1].currentTotalWithTax + " + " + currentTax + " + " + inputModel.monthlyValue)

        var currentTotalWithTax = (historicData[i-1].currentTotalWithTax + currentTax) + inputModel.monthlyValue
        var currentTotalWithoutTax = (historicData[i-1].currentTotalWithoutTax) + inputModel.monthlyValue

        var data : HistoricData = {
          'currentMonth' : i,
          'currentTax' : currentTax,
          'currentTotalWithTax' : currentTotalWithTax,
          'currentTotalWithoutTax' : currentTotalWithoutTax,
          'totalTax': totalTax
        }
        //console.log(data)
        historicData.push(data)
      }
    }

    return historicData

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
          console.log("error catch" + err)
        }
      }
    )
  }

}
