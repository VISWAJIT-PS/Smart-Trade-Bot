import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  onLogin() {
    // Perform login logic here if needed

    // Redirect to '/chat'
    this.router.navigateByUrl('/chat');
  }

}
