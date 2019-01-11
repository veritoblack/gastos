import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './gastos-sidebar.component.html',
  styleUrls: ['./gastos-sidebar.component.scss']
})
export class GastosSidebarComponent implements OnInit {
  options: { id: number, name: string }[];

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.options = this.getOptions();
  }

 getOptions(): { id: number, name: string }[] {
    return this.utils.getSideBarOptions();
  }

  onClick(id: number): void {
    switch (id) {
      case 0: alert('GO TO MAIN');
        break;
      case 1: alert('create new gasto');
        break;
      case 2:  alert('Reportes');
        break;
      case 3: alert('Actualizar data');
    }
  }

}
