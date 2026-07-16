import { Component, inject } from '@angular/core';
import { Login as LoginService } from '../../services/login/login';

@Component({
	selector: 'app-login',
	imports: [],
	templateUrl: './login.html',
	styleUrl: './login.css',
})
export class Login {
	loginService = inject(LoginService)
}
