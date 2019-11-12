import { Component, OnInit } from '@angular/core';
import { IntegrantessemilleroService } from '../../services/integrantessemillero.service';
import { IntegrantesSemillero } from '../interfaces/integrantessemillero';


@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {

   Integrantes:IntegrantesSemillero[] = [];

  constructor( private _integrantesSemilleroService:IntegrantessemilleroService ) { }

  ngOnInit() {
    this.Integrantes = this._integrantesSemilleroService.getIntegrantes();

    console.log(this.Integrantes);
  }

}
