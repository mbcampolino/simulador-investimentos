import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
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

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService) {
    fixedService.calcFixedInvestment()
    this.plotChart()
  }

  plotChart() {

    var meses: number[] = []
    var valueTotal: number[] = []
    var invested: number[] = []
    var tax: number[] = []

    this.fixedService.historicData.forEach(element => {
      meses.push(element.currentMonth)
      valueTotal.push(element.currentTotalWithTax)
      tax.push(element.totalTax)
      invested.push(element.currentTotalWithoutTax)
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
        categories: meses
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

  backToSimulate() {
    this.router.navigate(['']);
  }

  share() {
    return;
    this.exportToCsv("teste.csv", this.fixedService.historicData)

  }

  exportToCsv(filename: string, rows: any[]) {
    if (!rows || !rows.length) {
      return;
    }
    const separator = '|';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  }

}

