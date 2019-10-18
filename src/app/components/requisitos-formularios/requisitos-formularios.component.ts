import { Component, OnInit } from '@angular/core';
import { RequisitosModel } from '../interfaces/requisitos.model';
import { NgForm } from '@angular/forms';
import { RequisitosService } from 'src/app/services/requisitos.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requisitos-formularios',
  templateUrl: './requisitos-formularios.component.html',
  styleUrls: ['./requisitos-formularios.component.css']
})
export class RequisitosFormulariosComponent implements OnInit {

  requisitos = new RequisitosModel();

  constructor(private requisitosService: RequisitosService) { }

  ngOnInit() {
  }


  guardar(form: NgForm){

    if (form.invalid){
      console.log('No valido')
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.requisitos.id){
      peticion = this.requisitosService.actualizarRequisitos(this.requisitos)
    }else{
      peticion = this.requisitosService.crearRequisitos(this.requisitos)
    }

    peticion.subscribe( resp=>{
      Swal.fire({
        title: this.requisitos.nombre,
        text:'Se actualizó correctamente',
        type:'success'
      });
    })
  }
}
