import { computed, Injectable, signal } from '@angular/core';
import { email, form, required } from '@angular/forms/signals';
import { LoginData } from '../../models/form.models';

@Injectable({
	providedIn: 'root',
})
export class Landing {
	// services = inject(Services)

	// otherName = this.services.getName()

	name = signal('Gibun')
	capitalizedName = computed(() => this.name().toUpperCase())

	count = signal(0)

	isAdmin = signal(false)

	loginModel = signal<LoginData>({
		email: "",
		password: "",
	})

	loginForm = form(this.loginModel, (schema) => {
		required(schema.email, { message: "Email is required!" })
		email(schema.email, { message: "Enter a valid email address" })

		required(schema.password, { message: "Password is required" })
	})

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
