"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var forms_1 = require('@angular/forms');
var ng2_redux_1 = require('ng2-redux');
var store_1 = require('./store');
var app_component_1 = require('./app.component');
var expenses_component_1 = require('./expenses/expenses.component');
var dates_component_1 = require('./dates/dates.component');
var dropdown_module_1 = require('@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module');
var dropdown_basic_1 = require('./widgets/ngbd-dropdown-basic/dropdown-basic');
var gastos_header_component_1 = require("./gastos-header/gastos-header.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
//TODO los objetos de el NgModule
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(store_1.rootReducer, {});
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                expenses_component_1.ExpensesComponent,
                dates_component_1.DatesComponent,
                dropdown_basic_1.NgbdDropdownBasic,
                gastos_header_component_1.GastosHeaderComponent,
                nav_bar_component_1.NavBarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng_bootstrap_1.NgbModule,
                dropdown_module_1.NgbDropdownModule.forRoot(),
                forms_1.FormsModule,
                ng2_redux_1.NgReduxModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map