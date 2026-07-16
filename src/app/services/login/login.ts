import { inject, Injectable, signal } from '@angular/core';
import { LoginData, User } from '../../models/login.models';
import { email, form, required } from '@angular/forms/signals';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class Login {
	http = inject(HttpClient)

	loginModel = signal<LoginData>({ email: "", password: "" })
	loginForm = form(this.loginModel, (value) => {
		required(value.email, { message: "Email tidak boleh kosong." })
		email(value.email, { message: "Data harus bertipe email." })

		required(value.password, { message: "Password tidak boleh kosong." })
	})

	onSubmit() {
		this.http.get<User[]>(`http://localhost:3000/users`).subscribe((result) => console.log(result))
	}
}
