import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Real Estate Property Management';

  loginModal: boolean;
  loginPosition: string;

  showLoginDialog(position: string) : void{
    console.log("Login Dialog");
    this.loginModal = true;
    this.loginPosition = position;
  }

}
