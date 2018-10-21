import {Component} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './gastos-header.component.html',
  styleUrls: ['./gastos-header.component.scss']
})

export class GastosHeaderComponent {

  constructor() {
  }

  openMenu() :void {
    console.log('openMenu')
  }

}
