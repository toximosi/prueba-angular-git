import { Component } from '@angular/core';
import { Tarea } from './models/compraslits.model';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {

  title = 'Gestor lista compra';

  //llama al elemento constructor de comparslist
  tareas: Tarea[];

  constructor() {
    /*this.tareas = [
      //creamos un json de datos con la relación del elemento tarea
      { id: 1, titulo: 'el que sea', cantidad: 2 }
      //Es mejor hacer esto con un servicio, para que todos los datos esten disponibles para todos los componentes.*/
  };
}
