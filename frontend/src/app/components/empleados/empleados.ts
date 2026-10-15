import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  imports: [FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class Empleados implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  agregarEmpleado(form?: NgForm) {
    this.empleadoService.postEmpleado(form?.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}