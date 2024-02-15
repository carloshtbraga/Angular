import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() numberChanged = new EventEmitter<any>()
  handleClick(): void {
    this.numberChanged.emit()
  }
}
