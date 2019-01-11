import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  getSideBarOptions(): { id: number, name: string }[] {
    return [
      { id: 0, name: 'Ver gastos'},
      { id: 1, name: 'Agregar gasto'},
      { id: 2, name: 'Reportes'},
      { id: 3, name: 'Actualizar datos'}
    ];
  }

}
