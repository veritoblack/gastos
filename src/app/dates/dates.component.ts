import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { DATEEXPENSES } from '../mock/mock-date-expenses';

const months = DATEEXPENSES;

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  model: any;
  month: string;
  @Output() filterExpenses = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  formatter = (x: {dateString: string}) => x.dateString;


  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : months.filter(v => v.dateString.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  onClick() {
    if (typeof this.month === 'object') {
      // console.log(this.month);
      this.filterExpenses.emit(this.month);
    }
  }
}
