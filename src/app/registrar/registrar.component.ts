import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  constructor(private router: Router) { }

  navegarAlOtroComponente() {
    this.router.navigate(['']);
  }
}
