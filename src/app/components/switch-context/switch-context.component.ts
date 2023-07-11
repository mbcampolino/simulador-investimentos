import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-context',
  templateUrl: './switch-context.component.html',
  styleUrls: ['./switch-context.component.scss']
})
export class SwitchContextComponent {

  @Input() nameOn = "Sim"
  @Input() nameOff = "Não"

  @Input() isOn = true

  @Output() newItemEvent = new EventEmitter<boolean>();

  updadeCheckBox(change: any) {
    this.isOn = change.currentTarget.checked
    this.newItemEvent.emit(this.isOn);
    console.log(this.isOn)
  }

}
