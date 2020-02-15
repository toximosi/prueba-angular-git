import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/compraslits.model';
import { TareaServiceTsService } from './services/tarea.service';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent implements OnInit {

  title = 'Gestor lista compra';

  //llama al elemento constructor de comparslist
  tareas: Tarea[];

  constructor(private tareaServiceTsService: TareaServiceTsService) {
    /*this.tareas = [
      //creamos un json de datos con la relación del elemento tarea
      { id: 1, titulo: 'el que sea', cantidad: 2 }
      //Es mejor hacer esto con un servicio, para que todos los datos esten disponibles para todos los componentes.*/
  };

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.tareas = this.tareaServiceTsService.getTareas();

  }


}
