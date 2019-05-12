import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './gastos-sidebar.component.html',
  styleUrls: ['./gastos-sidebar.component.scss']
})
export class GastosSidebarComponent implements OnInit {
  options: { route: string, name: string }[];
  @Output() goTo = new EventEmitter<string>();
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.options = this.getOptions();
  }

 getOptions(): { route: string, name: string }[] {
    return this.utils.getSideBarOptions();
  }

  navigate(route: string): void {
    this.goTo.emit(route);
  }

}
