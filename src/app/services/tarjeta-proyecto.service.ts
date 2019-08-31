import { Injectable } from '@angular/core';
import { tarjeta_proyecto } from '../components/interfaces/tarjeta_proyecto';

@Injectable({
  providedIn: 'root'
})
export class TarjetaProyectoService {


  proyectos:tarjeta_proyecto[];
  constructor() {

    let proyecto1 :tarjeta_proyecto={
      nombre :'Página Web Del Semillero',
      integrantes:4,
      texto:'Se crea una nueva pagina para la iush para que sus estudiantes se puedan inscribir a los semilleros y estar actualizados de los proyectos que se estan ejecutando actualmente',
      file: "assets/img/proyecto3.jpg",
      pid:1,
      texto1:'',
      integrante1:'Juan Esteban Robayo',
      integrante2:'Andres Felipe Marin',
      integrante3:'Juan Esteban Cano',

      };
      
      let proyecto2 :tarjeta_proyecto={
        nombre :'Asistencias Sistematizadas/Automatizadas',
        integrantes:2,
        texto: "con el carnet de estudiante registrar las asistencias a lso eventos de la iush",
        file: "assets/img/proyectos1.jpg",
        pid:2,
        texto1:'',
        integrante1:'Juan Esteban Robayo',
        integrante2:'Andres Felipe Marin',
        integrante3:'Juan Esteban Cano',
  
        }
        
      let proyecto3 :tarjeta_proyecto={
        nombre :'Cuadro De Turnos Vigilantes IE De Bello',
        integrantes:3,
        texto: "Proyecto  de generacion de horarios y turnos automaticos para un colegio de Bello",
        file: "assets/img/proyecto2.jpg",
        pid:3,
        texto1:'',
        integrante1:'Juan Esteban Robayo',
        integrante2:'Andres Felipe Marin',
        integrante3:'Juan Esteban Cano',
  
  }
  this.proyectos=[proyecto1,proyecto2,proyecto3];

  



   }

getProyecto()
{
return this.proyectos;


}
}
