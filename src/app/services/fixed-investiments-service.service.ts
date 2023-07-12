import { Injectable } from '@angular/core';
import { InvestmentModel } from '../models/InvestmentModel';
import { HistoricData } from '../models/historicData';
import { HttpClient } from '@angular/common/http';
import { SelicArray } from './../models/SelicArray';

@Injectable({
  providedIn: 'root'
})
export class FixedInvestimentsServiceService {

  total: number = 0 /// total acumulado
  lastMonthTax: number = 0 /// ultimo rendimento mensal
  currentSelic: number = 0

  constructor(private httpClient: HttpClient) {

    var backend = "/api/servico/sitebcb/historicotaxasjuros"
    var mock = "./../../assets/mock/mockselic.json"

    this.getApiSelic(backend)
  }

  taxesByMonth() {
    return this.model.taxType == "mês"
  }

  dueDateTypeByMonth() {
    return this.model.dueDateType == "mês"
  }

  investimentsByMonth = false

  model: InvestmentModel = {
    initialValue: 100000,
    dueDate: 1,
    dueDateType: "ano",
    taxType: "ano",
    taxValue: this.currentSelic,
    monthlyValue: 1000
  }

  historicData: HistoricData[] = []

  calcFixedInvestment() {

    this.historicData = []

    var currentDueDate: number = 0
    var currentTaxValue: number = 0

    if (this.model.dueDateType == "ano") {
      currentDueDate = (this.model.dueDate) * 12
    } else {
      currentDueDate = this.model.dueDate
    }

    if (this.model.taxType == "ano") {
      currentTaxValue = this.model.taxValue / 12
    } else {
      currentTaxValue = this.model.taxValue
    }

    for (var i : number = 0 ; i < currentDueDate + 1; i++) {

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


  getApiSelic(url : string) {

    const HEADERS = {
      'Accept': 'application/json',
      // 'withCredentials':'true',
      // 'Access-Control-Allow-Origin':'*'
    }

    const options = { headers: HEADERS };

    return this.httpClient.get<SelicArray>(url,options).subscribe(resultado => {
      console.log(resultado.conteudo[0].MetaSelic)
      var selic = Number(Number(resultado.conteudo[0].MetaSelic).toFixed(2));
      this.currentSelic = selic
      this.model.taxValue = selic
    }, error => {
      this.currentSelic = 0
      console.log("error catch" + error)
    }
    );
  }

}
