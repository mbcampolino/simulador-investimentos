import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexOptions,
  ApexYAxis
} from "ng-apexcharts";
import { HistoricData, InputModel } from 'src/app/models/historicData';
import { CacheModel } from 'src/app/models/CacheModel';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
  colors: ApexOptions | any;
};

@Component({
  selector: 'app-results-fixed-investments',
  templateUrl: './results-fixed-investments.component.html',
  styleUrls: ['./results-fixed-investments.component.scss']
})
export class ResultsFixedInvestmentsComponent {

  @ViewChild("chart")
  chart: ChartComponent = {} as ChartComponent
  public chartOptions = {} as Partial<ChartOptions>;

  investments: HistoricData [] = []
  savedId: string | null = null

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService, public activeRoute: ActivatedRoute, public localStorageService: LocalstorageService) {
    this.savedId = this.activeRoute.snapshot.queryParamMap.get('savedId')

    if (this.savedId) {
      const saved = this.localStorageService.getById(this.savedId)

      if (saved && saved.model) {
        this.fixedService.model = saved.model
        this.investments = saved.historic && saved.historic.length > 0
          ? saved.historic
          : this.fixedService.calcFixedInvestment(saved.model)
        this.plotChart(this.investments)
        return
      }
    }

    var model = this.getModel()
    this.fixedService.model = model
    this.investments = this.fixedService.calcFixedInvestment(model)
    this.plotChart(this.investments)
  }

  getModel() : InputModel {

    var input = new InputModel()

    input.initialValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('initialValue')!!),
    input.dueDate = Number.parseInt(this.activeRoute.snapshot.queryParamMap.get('dueDate')!!),
    input.dueDateType = this.activeRoute.snapshot.queryParamMap.get('dueDateType')!!,
    input.taxType =  this.activeRoute.snapshot.queryParamMap.get('taxType')!!,
    input.taxValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('taxValue')!!),
    input.monthlyValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('monthlyValue')!!)
    input.initialDate = this.activeRoute.snapshot.queryParamMap.get('startDate')!!

    return input
  }

  get lastHistoricItem(): HistoricData | undefined {
    return this.investments && this.investments.length > 0 ? this.investments[this.investments.length - 1] : undefined
  }

  plotChart(historic: HistoricData []) {

    var index: number[] = []
    var meses: string[] = []
    var valueTotal: number[] = []
    var invested: number[] = []
    var tax: number[] = []

    var valueIndex = 0

    historic.forEach(element => {
      meses.push(element.currentMonth)
      valueTotal.push(element.currentTotalWithTax)
      tax.push(element.totalTax)
      invested.push(element.currentTotalWithoutTax)
      index.push(valueIndex)
      valueIndex += 1
    });

    this.chartOptions = {
      series: [
        {
          name: "total investido",
          data: invested
        },
        {
          name: "total com juros",
          data: valueTotal
        }
      ],
      chart: {
        height: 200,
        type: "line",
      },
      colors: ['#909090','#000000'],
      title: {
        text: ""
      },
      xaxis: {
        categories: index
      },
      yaxis: {
        labels: {
          formatter: function (n : number) {

            if (n < 1e3) return n;
            if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
            if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
            if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
            if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
            return n
          }
        },
      }
    };

  }

  detectMob() {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isSizePrefer = window.innerWidth < 600;

    var pc = isSizePrefer && !isMobile
    var mobile = isSizePrefer && isMobile

    return pc || mobile
  }

  onInvestedChange(updatedItems: HistoricData[]) {
    this.investments = [...updatedItems]
    this.plotChart(this.investments)

    if (this.savedId) {
      const saved = this.localStorageService.getById(this.savedId)

      if (saved) {
        this.localStorageService.update(this.savedId, this.fixedService.model, this.investments, saved.name)
      }
    }
  }

  backToSimulate() {
    this.router.navigate(['']);
  }

  async share() {
    try {

      var query = 'initialValue=' + this.getModel().initialValue+
      '&monthlyValue=' + this.getModel().monthlyValue+
      '&dueDateType=' + this.getModel().dueDateType+
      '&taxType=' + this.getModel().taxType+
      '&taxValue=' + this.getModel().taxValue+
      '&dueDate=' + this.getModel().dueDate

      const shareData = {
        title: "Meus investimentos",
        text: "Veja esta simulação de investimento!",
        url: 'https://mbcampolino.github.io/simulador-investimentos/?' + query,
      };

      await navigator.share(shareData);
    } catch (err) {

    }
    return;
  }

}

