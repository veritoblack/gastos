import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { ReportsComponent } from './reports/reports.component';
import { DataComponent } from './data/data.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'new', component: NewExpenseComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'data', component: DataComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
