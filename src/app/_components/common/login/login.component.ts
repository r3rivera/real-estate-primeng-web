import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../_services';

@Component({
  selector: 'r3app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) { }

  loginForm: FormGroup;
  loginSubmitted: boolean;

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
        'username': new FormControl(null, [ Validators.required, Validators.email ]),
        'password': new FormControl(null, [ Validators.required ])
    });

    this.loginSubmitted = false;

  }

  onLoginUser(): void{
    this.loginSubmitted = true;

    if(this.loginForm.invalid && this.loginSubmitted){
      console.log("Login Form is not valid!");
      return;
    }

    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;
    this._authService.authenticateUser(username, password);

  }

  isValidField(field:string){
    if(this.loginForm.get(field) && !this.loginForm.get(field).dirty){
      return true;
    }
    return false;
  }
}
