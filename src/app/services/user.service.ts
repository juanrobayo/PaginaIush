import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
<<<<<<< HEAD
=======
import {User} from '../components/interfaces/user';
>>>>>>> 2f90a0ce66f2a0c9d7d92b795754f380ee01421c

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getUsers(){
    return this.angularFireDatabase.list('/users');
  }

  getUserById(uid){
    return this.angularFireDatabase.object('/users/' + uid);
  }

  createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  editUser(user){
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
}
