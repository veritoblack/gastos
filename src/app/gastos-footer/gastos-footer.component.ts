import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Money } from '../models/money.model';


@Component({
  selector: 'app-footer',
  templateUrl: './gastos-footer.component.html',
  styleUrls: ['./gastos-footer.component.scss']
})
export class GastosFooterComponent implements OnInit {
  // money = MONEY[1];
  days: number;
  currentMoney: number;
  @Input() money: Money;

  constructor() { }


  ngOnInit() {
  }

  perday(): number {
    this.days = moment().endOf('month').diff(moment(), 'days');
    return this.money.currentMoney / this.days;
  }

}
