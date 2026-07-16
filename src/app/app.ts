import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button/button';
import { LoginData } from './models/form.models';
import { form, FormField } from '@angular/forms/signals';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Button, FormField],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	name = signal('Gibun')
	capitalizedName = computed(() => this.name().toUpperCase())

	count = signal(0)

	isAdmin = signal(false)

	loginModel = signal<LoginData>({
		email: "",
		password: "",
	})

	loginForm = form(this.loginModel)

	httydChar = signal([
		{ id: crypto.randomUUID(), name: "Hiccup" },
		{ id: crypto.randomUUID(), name: "Astrid" },
		{ id: crypto.randomUUID(), name: "Fishlegs" },
		{ id: crypto.randomUUID(), name: "Snotlout" },
		{ id: crypto.randomUUID(), name: "Ruffnut" },
		{ id: crypto.randomUUID(), name: "Tuffnut" },
	])

	changeName(newName: string) {
		if (newName.toLowerCase() === this.name().toLowerCase()) {
			return this.name.set('Gibun')
		}
		this.name.set(newName)
	}

	increment() {
		this.count.update((prev) => prev + 1)
	}

	decrement() {
		this.count.update((prev) => prev - 1)
	}

	changeToAdmin() {
		this.isAdmin.update((prev) => !prev)
	}

	submitForm(e: Event) {
		e.preventDefault()

		console.log("This is from this.loginForm().value():")
		console.log(this.loginForm().value())

		console.log("This is from this.loginModel():")
		console.log(this.loginModel())
	}

	resetForm() {
		this.loginForm.email().value.set('')
		this.loginForm.password().value.set('')
	}
}
