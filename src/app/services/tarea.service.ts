import { Injectable } from '@angular/core';
import { Tarea } from '../models/compraslits.model';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceTsService {

  tareas: Tarea[] = [
    { id: 1, titulo: 'comprar leche', cantidad: 6 },
    { id: 2, titulo: 'comprar pan', cantidad: 1 },
    { id: 3, titulo: 'comprar pasta de dientes', cantidad: 2 },
  ];

  constructor() { };

  getTareas() {
    return this.tareas;
  };


}
