import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

  authenticateUser(username: string, password: string) : void{
    console.log("AuthService :: User is " + username + ", Password is " + password);

  }

}
