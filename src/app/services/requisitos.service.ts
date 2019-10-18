import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequisitosModel } from '../components/interfaces/requisitos.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  private url = 'https://semillerosiush.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearRequisitos( requisitos: RequisitosModel){
    return this.http.post(`${this.url}/requisitos.json`, requisitos)
     .pipe(
       map( (resp: any) => {
         requisitos.id = resp.name;
         return requisitos;
       })
     );
  }

  actualizarRequisitos(requisitos: RequisitosModel){

    const requisitosTemp = {
      ...requisitos
    };

    delete requisitosTemp.id;

    return this.http.put(`${this.url}/requisitos/${requisitos.id}.json`, requisitos)
  }
  
}
