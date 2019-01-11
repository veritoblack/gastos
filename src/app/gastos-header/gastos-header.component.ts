import {Component, EventEmitter, Output} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './gastos-header.component.html',
  styleUrls: ['./gastos-header.component.scss']
})

export class GastosHeaderComponent {
  showMenu: boolean;
  @Output() showSideBar = new EventEmitter<boolean>();

  constructor() {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.showSideBar.emit(this.showMenu);
  }

}
