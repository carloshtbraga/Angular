import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css',
})
export class EmitterComponent {

  myNumber: number = 0
  onNumberChanged(): void {
    this.myNumber= Math.floor(Math.random() * 100);
    console.log('Number changed');
  }
}
