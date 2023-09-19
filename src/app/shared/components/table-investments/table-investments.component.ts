import { Component, Input } from '@angular/core';
import { HistoricData } from 'src/app/models/historicData';
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
  @Input() index : number = 0

  @Input() data : HistoricData = {
    currentMonth: '',
    currentTax: 0,
    currentTotalWithTax: 0,
    currentTotalWithoutTax: 0,
    totalTax: 0
  }

}
