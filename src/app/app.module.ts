import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaServiceTsService } from './services/tarea.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // se coloca aquí el servicio porque lo que importo es míom y no es "externo"
  providers: [
    TareaServiceTsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
