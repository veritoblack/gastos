import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  getSideBarOptions(): { route: string, name: string }[] {
    return [
      { route: '', name: 'Ver gastos'},
      { route: 'new', name: 'Agregar gasto'},
      { route: 'reports', name: 'Reportes'},
      { route: 'data', name: 'Actualizar datos'}
    ];
  }

}
