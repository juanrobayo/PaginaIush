import { Component, OnInit } from '@angular/core';
import { LineaspModel } from '../interfaces/lineasp.model'


@Component({
  selector: 'app-lineasp',
  templateUrl: './lineasp.component.html',
  styleUrls: ['./lineasp.component.css']
})
export class LineaspComponent implements OnInit {

  lineasp:LineaspModel[];

  constructor() {
    let profundizacion1: LineaspModel = {
      titulo:'Lógica de Programación y Algoritmos.',
      img:'assets/img/PseInt.png',
      descripcion:'Hola mundo'
    };

    let profundizacion2: LineaspModel = {
      titulo:'Programación Orientada a la Web (Java y Python).',
      img:'assets/img/java.png',
      descripcion:'Hola mundo'
    };

    let profundizacion3: LineaspModel = {
      titulo:'Programación Orientado a Objetos (Java, Python y C#).',
      img:'assets/img/Python.png',
      descripcion:'Hola mundo'
    };

    let profundizacion5: LineaspModel = {
      titulo:'Programación para Dispositivos Móviles (Java y Android Studio).',
      img:'assets/img/android.png',
      descripcion:'Hola mundo'
    };

    let profundizacion6: LineaspModel = {
      titulo:'Asesorías Lógica (Seudocódigo, PseInt y LPP).',
      img:'assets/img/Pseudocodigo.png',
      descripcion:'Hola mundo'
    };

    let profundizacion7: LineaspModel = {
      titulo:'Programación para Dispositivos Móviles (Java y Android Studio).',
      img:'assets/img/BD.png',
      descripcion:'Hola mundo'
    };

    this.lineasp = [profundizacion1,profundizacion2,profundizacion3,profundizacion5,profundizacion6,profundizacion7]
   }



  ngOnInit() {
  }

}
