import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '-', '+', '*', '/', '=', 'CLEAR'];
  val = '';

  constructor() { }

  calculate($event: any) {
    var button = $event;
    if (button === '=') {
      this.val = eval(this.val)
    }
    else if (button === 'CLEAR') {
      this.val = '';
    }
    else {
      this.val += button
    }
  }
  ngOnInit(): void {
  }

}
