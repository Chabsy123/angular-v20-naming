import { Component, inject } from '@angular/core';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(LoginService);
}
