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

// TODO los objetos de el NgModule
@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DatesComponent,
    GastosHeaderComponent,
    NavBarComponent,
    GastosFooterComponent,
    GastosSidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTypeaheadModule.forRoot(),
    FormsModule,
    NgReduxModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
