import { Component, OnInit } from '@angular/core';
import { MONEY } from '../mock/mock-money';
import { DateExpense } from '../models/date-expense.model';
import { Money } from '../models/money.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  filter: number;
  money: Money;

  constructor() { }

  ngOnInit() {
      // TODO fijarse que sea el dia de hoy
      this.money = MONEY[0];
  }


  onPaidItem(money: number) {
    console.log('pague', money);
    this.money.currentMoney -= money;
  }

  onFilterExpenses(date: DateExpense) {
    this.filter = date.id;
    // TODO in the futuro the filter will be implement in the BE
  }
}
