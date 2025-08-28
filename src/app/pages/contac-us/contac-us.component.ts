import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contac-us',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contac-us.component.html',
  styleUrls: ['./contac-us.component.css']
})
export class ContacUsComponent {
  formValido = false;
  enviado = false;

  // ✅ Validación manual del formulario
  validarFormulario() {
    const nombreInput = document.querySelector('input[name="nombre"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const telefonoInput = document.querySelector('input[name="telefono"]') as HTMLInputElement;

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const telefono = telefonoInput.value.trim();

    // Referencias a los spans de error
    const errorNombre = document.getElementById('error-nombre')!;
    const errorEmail = document.getElementById('error-email')!;
    const errorTelefono = document.getElementById('error-telefono')!;

    // Expresiones regulares
    const soloLetrasRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const soloNumerosRegex = /^[0-9]+$/;

    // Inicializar mensajes
    errorNombre.textContent = '';
    errorEmail.textContent = '';
    errorTelefono.textContent = '';

    // Validaciones
    let nombreValido = nombre !== '' && soloLetrasRegex.test(nombre);
    let emailValido = email === '' || emailRegex.test(email);
    let telefonoValido = telefono === '' || soloNumerosRegex.test(telefono);

    if (!nombreValido) {
      errorNombre.textContent = nombre === ''
        ? 'El nombre es obligatorio.'
        : 'Solo se permiten letras en el nombre.';
    }

    if (!emailValido) {
      errorEmail.textContent = 'El email no tiene un formato válido.';
    }

    if (!telefonoValido) {
      errorTelefono.textContent = 'El teléfono solo debe contener números.';
    }

    // El formulario es válido si nombre válido y (email o teléfono válidos)
      this.formValido = nombreValido && (email !== '' || telefono !== '') && (emailValido && telefonoValido);

  }

  enviarFormulario(event: Event) {
    event.preventDefault(); // Evita el comportamiento por defecto si usamos JS
    const form = event.target as HTMLFormElement;

    // ✅ Enviar datos a Formspree mediante fetch
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        this.enviado = true;
        form.reset(); // ✅ Resetear el formulario
        this.formValido = false; // Desactivar el botón
      } else {
        alert('Error al enviar el formulario. Intenta de nuevo.');
      }
    })
    .catch(() => {
      alert('Error en la conexión. Intenta de nuevo.');
    });
  }
}

