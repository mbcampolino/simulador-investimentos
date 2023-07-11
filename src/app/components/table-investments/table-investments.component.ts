import { HistoricData } from './../../models/historicData';
import { Component, Input } from '@angular/core';
import { InvestmentModel } from 'src/app/models/InvestmentModel';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent {

  constructor(public service : FixedInvestimentsServiceService) {}

  @Input() isHeader: boolean = false
  @Input() last: boolean = false

  @Input() data : HistoricData = {
    currentMonth: 0,
    currentTax: 0,
    currentTotalWithTax: 0,
    currentTotalWithoutTax: 0,
    totalTax: 0
  }

}
