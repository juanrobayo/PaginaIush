export class RequisitosModel {
    id:string;
    nombre:string;
    apellido:string;
    correo:string;
    proyecto:string;
    codigoIush:number;
    aceptado:boolean;


    constructor(){
        this.aceptado = false;
    }
}