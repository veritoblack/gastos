import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer} from './store'

import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { DatesComponent } from './dates/dates.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';
import { NgbdDropdownBasic } from './widgets/ngbd-dropdown-basic/dropdown-basic';
import {GastosHeaderComponent} from "./gastos-header/gastos-header.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { GastosFooterComponent } from './gastos-footer/gastos-footer.component';


//TODO los objetos de el NgModule
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DatesComponent,
    NgbdDropdownBasic,
    GastosHeaderComponent,
    NavBarComponent,
    GastosFooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDropdownModule.forRoot(),
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {})
  }
}
