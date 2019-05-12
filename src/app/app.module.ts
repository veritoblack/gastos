import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer} from './store';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { DatesComponent } from './dates/dates.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead.module';
import {GastosHeaderComponent} from './gastos-header/gastos-header.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { GastosFooterComponent } from './gastos-footer/gastos-footer.component';
import { GastosSidebarComponent } from './gastos-sidebar/gastos-sidebar.component';

import { UtilsService } from './services/utils.service';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { DataComponent } from './data/data.component';
import { MainViewComponent } from './main-view/main-view.component';

// TODO los objetos de el NgModule
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DatesComponent,
    GastosHeaderComponent,
    NavBarComponent,
    GastosFooterComponent,
    GastosSidebarComponent,
    NewExpenseComponent,
    ReportsComponent,
    DataComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTypeaheadModule.forRoot(),
    FormsModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
