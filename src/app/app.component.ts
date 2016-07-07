import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  timeValue: number = 60;
  timeCounter: number;
  intervalRef: any;

  constructor() {
    this.timeCounter = this.timeValue;
  }

  startTimer() {
    console.log('timeCounter clicked');
    if (this.intervalRef) return;
    this.intervalRef = setInterval(() => {
      console.log('count down');
      if (this.timeCounter > 0)
        this.timeCounter--;
    }, 1000);    
  }

  stopTimer() {
    clearInterval(this.intervalRef);
    this.intervalRef = null;
  }

  resetTimer() {
    this.stopTimer();
    this.timeCounter = this.timeValue;
  }

  setTimeValue(value) {
    this.timeValue += value;
    this.resetTimer();
  }
}
