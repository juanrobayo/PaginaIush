import { Injectable } from '@angular/core';
import { IntegrantesSemillero } from '../components/interfaces/integrantessemillero';


@Injectable({
  providedIn: 'root'
})
export class IntegrantessemilleroService {

  private IntegrantesIush:IntegrantesSemillero[] = [
    {
      nombre:"Andres felipe",
      correo:"andres_marin1992@hotmail.com",
      file:"assets/img/Andres_Marin.jpeg",
    },
    {
      nombre:"Felipe Restrepo",
      correo:"ejm@hotmail.com",
      file:"assets/img/Felipe_Restrepo.jpeg",
    },
    {
      nombre:"Juan Esteban Cano Marín",
      correo:"ejm@hotmail.com",
      file:"assets/img/Juan_Cano.jpeg",
    }
  ];

  constructor() {
    // console.log("servicio listo");
   }

   getIntegrantes(){
     return this.IntegrantesIush;
   }
}
