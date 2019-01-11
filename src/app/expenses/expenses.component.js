"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var mock_expenses_1 = require('../mock/mock-expenses');
var actions_1 = require('../actions');
var ExpensesComponent = (function () {
    function ExpensesComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.expenses = mock_expenses_1.EXPENSES;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    ExpensesComponent.prototype.onSelect = function (expense) {
        console.log(expense);
    };
    ExpensesComponent.prototype.pay = function (expense) {
        console.log("I'm paying ", expense.price);
        // expense.paid = true;
        //
        this.ngRedux.dispatch({ type: actions_1.PAY, body: expense });
    };
    ExpensesComponent = __decorate([
        core_1.Component({
            selector: 'app-expenses',
            templateUrl: './expenses.component.html',
            styleUrls: ['./expenses.component.scss']
        })
    ], ExpensesComponent);
    return ExpensesComponent;
}());
exports.ExpensesComponent = ExpensesComponent;
//# sourceMappingURL=expenses.component.js.map
