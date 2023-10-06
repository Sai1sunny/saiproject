import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password!: string;
  username!: string;
  loginForm: any;
  

  constructor(private router: Router) {}

 
  login() {
    // Validate the user credentials and if valid, navigate to the dashboard page
    this.router.navigate(['/home']);
  }


}
