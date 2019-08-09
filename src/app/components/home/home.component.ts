import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/components/interfaces/noticias';
import { tarjeta_proyecto } from '../interfaces/tarjeta_proyecto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  proyectos:tarjeta_proyecto[];
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

   


    let proyecto1 :tarjeta_proyecto={
      nombre :'Página Web Del Semillero',
      integrantes:4,
      texto: "proyecto de prubea test 1111111111111111111111111111111111",
      campoobligatorio: true,
      file: "assets/img/proyecto3.jpg"
      };
      
      let proyecto2 :tarjeta_proyecto={
        nombre :'Asistencias Sistematizadas/Automatizadas',
        integrantes:2,
        texto: "proyecto de  prueba con2222222222222222222222222222222222222",
        campoobligatorio: true,
        file: "assets/img/proyectos1.jpg"
        }
        
      let proyecto3 :tarjeta_proyecto={
        nombre :'Cuadro De Turnos Vigilantes IE De Bello',
        integrantes:3,
        texto: "proyecto de  prueba con3333333333333333333333333333333",
        campoobligatorio: true,
        file: "assets/img/proyecto2.jpg"
   }

   this.informacion = [noticias1,noticias2];
   this.proyectos=[proyecto1,proyecto2,proyecto3];

  }
  ngOnInit() {
  }

}


