import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    var username = event.target.querySelector('#username').value;
    var password = event.target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data=>{
      console.log(data['data'], " is what we get from server")
      if(data['data'] === 'Success'){
        //redirect
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true)
      }else{
      window.alert(data['data']);
    }
    });
    console.log(event);
  }
}
