import { Component, OnInit } from '@angular/core';
import { tarjeta_proyecto } from 'src/app/interfaces/tarjeta_proyecto';

@Component({
  selector: 'app-actualidad-proyectos',
  templateUrl: './actualidad-proyectos.component.html',
  styleUrls: ['./actualidad-proyectos.component.css'],
})
export class ActualidadProyectosComponent implements OnInit {


// creo la variable para el arreglo proyecto
proyectos:tarjeta_proyecto[];

  constructor() { 

let proyecto1 :tarjeta_proyecto={
nombre :'Página Web Del Semillero',
integrantes:4,
texto: "proyecto de prubea test ",
campoobligatorio: true,
file: "assets/img/proyecto3.jpg"
};

let proyecto2 :tarjeta_proyecto={
  nombre :'Asistencias Sistematizadas/Automatizadas',
  integrantes:2,
  texto: "proyecto de  prueba con",
  campoobligatorio: true,
  file: "assets/img/proyectos1.jpg"
  }
  
let proyecto3 :tarjeta_proyecto={
  nombre :'Cuadro De Turnos Vigilantes IE De Bello',
  integrantes:3,
  texto: "proyecto de  prueba con",
  campoobligatorio: true,
  file: "assets/img/proyecto2.jpg"
  
  
}
 
    this.proyectos = [proyecto1,proyecto2,proyecto3]
  
  // creo arreglo con los datos a recorrer
  
console.log(this.proyectos)

}
  ngOnInit() {


  }

}
  
    // declarar variables e imprimir
//     let a:number = 1;
//     let b:number =8;
//     let c:string ='1';
//     let d:string="4";
//     let e: boolean= true;
//     let f: object ={};
//     console.log(a+b);
//     console.log(a * b);

// let j :boolean [] =[true,e];

// let k :object [] = [{},f];

// let q :any [] = [1,'aoe',{},[]];
