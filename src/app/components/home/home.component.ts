import { Component, OnInit } from '@angular/core';
import { tarjeta_proyecto } from '../interfaces/tarjeta_proyecto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  proyectos:tarjeta_proyecto[];

  constructor() {

    let proyecto1 :tarjeta_proyecto={
      nombre :'Página Web Del Semillero',
      integrantes:4,
      texto:'Se crea una nueva pagina para la iush para que sus estudiantes se puedan inscribir a los semilleros y estar actualizados de los proyectos que se estan ejecutando actualmente',
      campoobligatorio: true,
      file: "assets/img/proyecto3.jpg"
      };
      
      let proyecto2 :tarjeta_proyecto={
        nombre :'Asistencias Sistematizadas/Automatizadas',
        integrantes:2,
        texto: "con el carnet de estudiante registrar las asistencias a lso eventos de la iush",
        campoobligatorio: true,
        file: "assets/img/proyectos1.jpg"
        }
        
      let proyecto3 :tarjeta_proyecto={
        nombre :'Cuadro De Turnos Vigilantes IE De Bello',
        integrantes:3,
        texto: "Proyecto  de generacion de horarios y turnos automaticos para un colegio de Bello",
        campoobligatorio: true,
        file: "assets/img/proyecto2.jpg"
  }
  this.proyectos=[proyecto1,proyecto2,proyecto3];

  }
  ngOnInit() {
  }

}


