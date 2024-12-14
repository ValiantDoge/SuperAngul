import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterVal = signal(0);
  increment(){
    this.counterVal.update((val) => val + 1);
  }

  decrement(){
    this.counterVal.update((val) => val - 1);
  }

  reset(){
    this.counterVal.set(0);
  }
}
