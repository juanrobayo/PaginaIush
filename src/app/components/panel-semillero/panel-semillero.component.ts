import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Route, Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-panel-semillero',
  templateUrl: './panel-semillero.component.html',
  styleUrls: ['./panel-semillero.component.css']
})
export class PanelSemilleroComponent implements OnInit {
  friends: User[];
  constructor(private userService: UserService,private authenticationService: AuthenticationService, private router: Router) {
     this.userService.getUsers().valueChanges().subscribe((data : User[]) =>{
       this.friends = data;
     }, (error) => {
      console.log('error')
     })
   }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logOut().then (() => {
      alert('Sesion cerrada')
      this.router.navigate(['login'])
    }) .catch((error) => {
      console.log(`Error`)
    });
  }

}
