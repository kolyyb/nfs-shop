import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'nfs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user : firebase.User;

  constructor(private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => this.user = user);
   }

  logout() {
    this.angularFireAuth.auth.signOut();
}
}
