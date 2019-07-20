import { Component, OnInit } from '@angular/core';
import {User} from '../../interfaces/user';
import { AuthenticationService } from "src/app/services/AuthenticationService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // friends: User[];
  operation: string = 'login';
  email: string = null;
  password: string = null;
  constructor(private authenticationService: AuthenticationService) {  }

  ngOnInit() {
  }

  login(){
    this.authenticationService.loginWithEmail(this.email,this.password).then( data => {
      alert('Loggeado correctamente');
      console.log(data);
    }).catch( error => {
      alert('Ocurrio un error');
      console.log(error);
    });
  }

  register(){
    this.authenticationService.registerWithEmail(this.email,this.password).then( (data) => {
      alert('Registrado correctamente');
      console.log(data);
    }).catch((error) => {
      alert('Ocurrio un error');
      console.log(error);
    });
  }
}


// let usuario1: User = {
//   name: 'andres',
//   age: 27,
//   email: 'andres_marin1992@hotmail.com',
//   uid: 1,
// };
// let usuario2: User = {
//   name: 'pedro',
//   age: 32,
//   email: 'pedro_marin1982@hotmail.com',
//   uid: 2,
// };
// let usuario3: User = {
//   name: 'carlos',
//   age: 17,
//   email: 'carlos_marin1992@hotmail.com',
//   uid: 3,
// };
// let usuario4: User = {
//   name: 'juan',
//   age: 27,
//   email: 'mono@hotmail.com',
//   uid: 4,
// };
// let usuario5: User = {
//   name: 'camila',
//   age: 37,
//   email: 'hook@hotmail.com',
//   uid: 5,
// };
// this.friends = [usuario1,usuario2,usuario3,usuario4,usuario5];
