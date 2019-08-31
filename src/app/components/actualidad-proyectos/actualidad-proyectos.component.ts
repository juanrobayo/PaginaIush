import { Component, OnInit, Query } from '@angular/core';
import { tarjeta_proyecto } from '../interfaces/tarjeta_proyecto';
import { ActivatedRoute } from '@angular/router';
import { filter, find } from 'rxjs/operators';

@Component({
  selector: 'app-actualidad-proyectos',
  templateUrl: './actualidad-proyectos.component.html',
  styleUrls: ['./actualidad-proyectos.component.css'],
})
export class ActualidadProyectosComponent implements OnInit {

  protectoId:any;
  proyectos:tarjeta_proyecto[];
  proyectoActual: any;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.protectoId=this.activatedRoute.snapshot.params['pid'];

    console.log(this.protectoId)


    let proyecto1 : tarjeta_proyecto= {
      nombre :'Página Web Del Semillero',
      integrantes:4,
      texto:'Se crea una nueva pagina para la iush para que sus estudiantes se puedan inscribir a los semilleros y estar actualizados de los proyectos que se estan ejecutando actualmente',
      file: "assets/img/proyecto3.jpg",
      pid:1,
      texto1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel',
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
      texto1:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, ',
      integrante1:'Juan Esteban Robayo',
      integrante2:'Andres Felipe Marin',
      integrante3:'Juan Esteban Cano',
    };
      
    let proyecto3 :tarjeta_proyecto={
      nombre :'Cuadro De Turnos Vigilantes IE De Bello',
      integrantes:3,
      texto: "Proyecto  de generacion de horarios y turnos automaticos para un colegio de Bello",
      file: "assets/img/proyecto2.jpg",
      pid:3,
      texto1:'rttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      integrante1:'Juan Esteban Robayo',
      integrante2:'Andres Felipe Marin',
      integrante3:'Juan Esteban Cano',
    };

    this.proyectos=[proyecto1,proyecto2,proyecto3];

    this.proyectoActual = this.proyectos.find ((record)=>record.pid == this.protectoId);
    console.log(this.proyectoActual)
  }


  ngOnInit() {


  }

}
