import {Component, OnInit} from '@angular/core';
import {Expense} from '../models/expense.model';
import {EXPENSES} from '../mock/mock-expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})

export class ExpensesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  expenses = EXPENSES;

  onSelect(expense: Expense): void {
    console.log(expense);
  }

}

