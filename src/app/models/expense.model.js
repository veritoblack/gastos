"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Expense = (function () {
    function Expense() {
    }
    return Expense;
}());
exports.Expense = Expense;
var Recurrent = (function (_super) {
    __extends(Recurrent, _super);
    function Recurrent() {
        _super.apply(this, arguments);
    }
    return Recurrent;
}(Expense));
exports.Recurrent = Recurrent;
var Casual = (function (_super) {
    __extends(Casual, _super);
    function Casual() {
        _super.apply(this, arguments);
    }
    return Casual;
}(Expense));
exports.Casual = Casual;
var PaymentMethod = (function () {
    function PaymentMethod() {
    }
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
//# sourceMappingURL=expense.model.js.map