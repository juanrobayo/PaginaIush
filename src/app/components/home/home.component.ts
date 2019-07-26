import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacion: Noticias[];

  constructor() {

    let noticias1: Noticias = {
      titulo:'Pagina semilleros',
      detalle:'Se crea una nueva pagina para la iush para que sus estudiantes se puedan inscribir a los semilleros y estar actualizados de los proyectos que se estan ejecutando actualmente',
      file:'assets/img/logoSisas.jpeg'
    }

    let noticias2: Noticias = {
      titulo:'Pagina semilleros',
      detalle:'Se crea una nueva pagina para la iush para que sus estudiantes se puedan inscribir a los semilleros y estar actualizados de los proyectos que se estan ejecutando actualmente',
      file:'assets/img/logoSisas.jpeg'
    }

    this.informacion = [noticias1,noticias2];

   }




  ngOnInit() {
  }

}


