import { FormField } from '@angular/forms/signals';
import { Button } from '../../components/button/button';
import { Landing as LandingService } from '../../services/landing/landing';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-landing',
	imports: [Button, FormField],
	templateUrl: './landing.html',
	styleUrl: './landing.css',
})
export class Landing {
	s = inject(LandingService)
}
