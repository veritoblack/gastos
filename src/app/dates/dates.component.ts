import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const months = ['Enero 2019', 'Diciembre 2018', 'Noviembre 2018', 'Octubre 2018', 'Septiembre 2018'];
// const years = ['2019', '2018', '2017'];

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  public model: any;
  public month: number;
  public year: number;

  constructor() {}

  ngOnInit() {}

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term === ''
          ? []
          : months
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    )

  // searchYear = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term =>
  //       term === ''
  //         ? []
  //         : years
  //             .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
  //             .slice(0, 10)
  //     )
  //   )

  onClick() {
    console.log('onClick');
  }
}
