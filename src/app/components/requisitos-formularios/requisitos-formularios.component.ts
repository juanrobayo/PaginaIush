import { Component, OnInit } from '@angular/core';
import { RequisitosModel } from '../interfaces/requisitos.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requisitos-formularios',
  templateUrl: './requisitos-formularios.component.html',
  styleUrls: ['./requisitos-formularios.component.css']
})
export class RequisitosFormulariosComponent implements OnInit {

  requisitos = new RequisitosModel();

  constructor() { }

  ngOnInit() {
  }


  guardar(form: NgForm){

    if (form.invalid){
      console.log('No valido')
      return;
    }

    console.log(form);
    console.log(this.requisitos)
  }
}
