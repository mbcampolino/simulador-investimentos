import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-context',
  templateUrl: './switch-context.component.html',
  styleUrls: ['./switch-context.component.scss']
})
export class SwitchContextComponent {

  @Input() nameOn = "Sim"
  @Input() nameOff = "Não"

  @Input() isOn? : boolean

  @Output() newItemEvent = new EventEmitter<boolean>();

  ngOnInit() {
    //console.log(this.isOn)
  }

}
