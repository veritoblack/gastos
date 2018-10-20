import {Component, OnInit} from '@angular/core';
import {NgRedux} from 'ng2-redux'
import {Expense} from '../models/expense.model';
import {EXPENSES} from '../mock/mock-expenses';
import {IAppState} from '../store'
import {PAY} from '../actions'

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})

export class ExpensesComponent implements OnInit {

    constructor(private ngRedux:NgRedux<IAppState>) {
    }

    ngOnInit() {
    }

    expenses = EXPENSES;

    onSelect(expense:Expense):void {
        console.log(expense);
    }

    pay(expense:Expense):void {
        console.log("I'm paying ", expense.price);
        expense.payed = true;
        this.ngRedux.dispatch({type: PAY, body: expense})
    }
}

