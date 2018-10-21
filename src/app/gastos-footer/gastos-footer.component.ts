import { Component, OnInit } from '@angular/core';
import { MONEY } from '../mock/mock-money';

@Component({
  selector: 'app-footer',
  templateUrl: './gastos-footer.component.html',
  styleUrls: ['./gastos-footer.component.scss']
})
export class GastosFooterComponent implements OnInit {

  constructor() { }

  money = MONEY[1];

  ngOnInit() {
  }

}
