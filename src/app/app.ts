import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button/button';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Button],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	name = signal('Gibun')
	capitalizedName = computed(() => this.name().toUpperCase())

	count = signal(0)

	isAdmin = signal(false)

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
}
