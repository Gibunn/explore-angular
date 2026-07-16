import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
	name = signal('Gibun')

	getName() {
		return this.name()
	}
}
