import { Component, signal } from '@angular/core';
import { Empleados } from './components/empleados/empleados';

@Component({
  selector: 'app-root',
  imports: [Empleados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}