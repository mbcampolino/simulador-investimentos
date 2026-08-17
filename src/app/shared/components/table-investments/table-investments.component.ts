import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() items: HistoricData[] = []

  @Output() investedValueChange = new EventEmitter<HistoricData[]>()

  editing = false
  editableValue = 0

  @Input() data : HistoricData = {
    currentMonth: '',
    currentTax: 0,
    currentTotalWithTax: 0,
    currentTotalWithoutTax: 0,
    totalTax: 0,
    monthInvestment: 0
  }

  startEdit() {
    this.editing = true
    this.editableValue = Number(this.data.monthInvestment ?? 0)
  }

  saveEdit() {
    this.onMonthInvestmentChange(this.editableValue)
    this.editing = false
  }

  onMonthInvestmentChange(value: number) {
    const recalculated = this.service.recalculateInvestedValue(this.items, this.index, Number(value), this.service.model)
    this.items.splice(0, this.items.length, ...recalculated)
    this.investedValueChange.emit([...this.items])
  }

}
