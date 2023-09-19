export class HistoricData {
  'currentMonth' : string
  'currentTax' : number
  'currentTotalWithTax' : number
  'currentTotalWithoutTax' : number
  'totalTax' : number
}

export class InputModel {

  initialValue : number = 1000
  dueDate : number = 12
  dueDateType: string = "mês"
  taxType: string = "ano"
  taxValue : number = 13.25
  monthlyValue : number = 1000
  initialDate: string = new Date().toISOString().slice(0, 10)

}
