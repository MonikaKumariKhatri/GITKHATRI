import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   loggedInStatus = false;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }
  get isLoggedIn(){
      return this.loggedInStatus;
    }
  getUserDetails(username, password){
    //post the details to httpserver and return user info
     return this.http.post('/api/Auth',{
     username,
     password
   })
  }
}
