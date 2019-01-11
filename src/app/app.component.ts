import { Component, OnInit } from '@angular/core';
import { MONEY } from './mock/mock-money';
import { Money } from './models/money.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  showMenu: boolean;
  money: Money;

  ngOnInit() {
    // TODO fijarse que sea el dia de hoy
    this.money = MONEY[0];
  }
  onShowSideBar(showMenu: boolean) {
    this.showMenu = showMenu;
  }

  onPaidItem(money: number) {
    console.log('pague', money);
    this.money.currentMoney -= money;
  }



}
