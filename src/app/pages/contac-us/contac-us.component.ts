import { Component } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-contac-us',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './contac-us.component.html',
  styleUrls: ['./contac-us.component.css']
})
export class ContacUsComponent {
  faqs = [
    {
      question: '¿Qué métodos de pago aceptan?',
      
      answer: ['Transferencia bancaria',
        'Yape',
        'Plin',
        'Tarjeta de crédito',
        'Tarjeta de debito',
      ],
      icon: 'fa-solid fa-wallet',
      open: false
    },
    {
      question: '¿Puede la aerolínea modificar mi vuelo o cancelarlo?',
      
      answer: [
        "Si su vuelo ha sido reprogramado por más de 3 horas de diferencia con su vuelo inicial, o cancelado por la compañía aérea, usted tiene derecho a un reembolso por el viaje que no ha disfrutado.",
        "Sin embargo, recuerde que el reembolso únicamente se aplica a los servicios que no ha recibido. Por lo tanto, el importe final del reembolso que le pagará la aerolínea puede no coincidir con el importe total pagado por la reserva."
      ],
      icon: 'fa-solid fa-plane-slash',
      open: false
    },
    {
      question: '¿Existen penalidades por cambios o reembolsos?',
     
      answer: ['Depende de la tarifa adquirida. Algunas permiten cambios con penalidad o sin costo adicional.'],
      icon: 'fa-solid fa-file-invoice-dollar',
      open: false
    },
    {
      question: 'En un reembolso autorizado, ¿qué gastos no se devuelven?',
      answer: ['Por norma general, el importe del reembolso no incluye la tasa de servicio.'],
      icon: 'fa-solid fa-money-bill-transfer', 
      open: false
    },
    {
      question: 'Si pierdo mi DNI antes de un vuelo nacional, ¿puedo viajar?',
      answer: ['Sí, presentando un certificado C4 el cual puedes solicitarlo en la página de RENIEC.'],
      icon: 'fa-solid fa-id-card-clip', 
      open: false
    },
    {
      question: '¿Tiene servicio de trámite de visado?',
      answer: [
        'Sí. Nosotros realizamos el check-in como parte de nuestro servicio, siempre y cuando el sistema lo permita. Usted recibirá su pase de abordar vía WhatsApp.',
        'En caso el horario en el que se active su check-in esté fuera del horario de atención, se lo comunicaremos.'
      ],
      icon: 'fa-solid fa-passport', 
      open: false
    },
    {
      question: '¿Qué documentos necesito para viajar?',
      answer: [
        'Viajes nacionales:',
        "Mayores de 18 años: DNI obligatorio.",
        "Menores de edad: partida de nacimiento, DNI y autorización notarial firmada por uno de los padres.",
       
        "Viajes internacionales:",
        "Mayores de 18 años: pasaporte con validez mínima de seis meses (o según el país), el DNI y Visa o pasaporte (en caso requiera).",
        "Menores de edad: partida de nacimiento, pasaporte, DNI y Visa (de ser necesario).",
        "Menores viajando sin padres: autorización de viaje firmada por ambos padres y legalizada por un Notario Público. Si viaja con uno de los padres, la autorización debe ser firmada por el padre que no viaje.",

      ],
      icon: 'fa-solid fa-book-atlas', 
      open: false
    },
    {
      question: '¿Me ayudan con el tema del Check-in?',
      answer: ['Sí. Nosotros realizamos el check-in como parte de nuestro servicio, siempre que el sistema lo permita. Usted recibirá su pase de abordar a través de WhatsApp. En caso de que el horario en el que se habilite su check-in esté fuera de nuestro horario de atención, se lo comunicaremos oportunamente.'],
      icon: 'fa-solid fa-user-check', 
      open: false
    },
    {
      question: '¿Cómo se asignan los asientos en la aerolínea?',
      answer: ['Los asientos son asignados de forma aleatoria por la aerolínea. Si no estás conforme, puedes solicitar un cambio en el counter el día de tu vuelo (la aerolínea puede aceptar o rechazar la solicitud).',
        'También tienes la opción de comprar asientos específicos, servicio que podemos gestionar por ti o que puedes realizar directamente desde la web de la aerolínea.'
      ],
      icon: 'fa-solid fa-chair', 
      open: false
    },

    {
      question: '¿Puedo acumular puntos con mi tarjeta de viajero frecuente de mi aerolínea?',
      answer: ['Si puede acumular millas de viajero frecuente en sus reservas, deberá brindarnos su número de pasajero frecuente para ingresarlo en el sistema.',
        'No todas las tarifas de las aerolíneas acumulan millas.'
      ],
      icon: 'fa-solid fa-coins', 
      open: false
    },
    {
      question: '¿Es posible canjear mis millas de otra aerolínea con ustedes?',
      answer: ['Nosotros podemos brindarle el servicio de hacer esta gestión contactándonos con la misma aerolínea para ello vamos a solicitarle su correo o usuario y contraseña.'],
      icon: 'fa-solid fa-right-left', 
      open: false
    },
    {
      question: '¿A qué países puedo viajar con DNI?',
      answer: ['En viajes nacionales, así como a los países miembros de la Comunidad Andina (Bolivia, Colombia, Ecuador y Perú) y a los países limítrofes como Argentina, Brasil, Chile, Uruguay y Paraguay, es obligatorio presentar el DNI vigente al momento del check-in.'],
      icon: 'fa-solid fa-globe-americas', 
      open: false
    },
    {
      question: '¿Puedo viajar embarazada?',
      answer: ['Sí, las aerolíneas permiten viajar a mujeres embarazadas, aunque las condiciones varían según el tiempo de gestación. Ten en cuenta lo siguiente:',
        'Consulta siempre con tu médico antes del vuelo.',
        'A partir del séptimo mes, necesitas un certificado médico que autorice el viaje.',
        'Informa a tu médico si tienes antecedentes como abortos, sangrados, hipertensión o diabetes.',
        'En el noveno mes, deberás viajar acompañada de un médico.',
        'Durante el vuelo, mantente hidratada, muévete regularmente y lleva tus medicamentos necesarios.',
        'Cada aerolínea tiene sus propias políticas, por lo que es importante informar sobre tu embarazo al momento de comprar el pasaje.',
       
      ],
      icon: 'fa-solid fa-person-pregnant', 
      open: false
    }
    
  ];

 constructor() { }

  toggleFaq(index: number) {
    // Guarda el estado actual de la pregunta en la que se hizo clic
    const currentState = this.faqs[index].open;

    // 1. Cierra todas las preguntas
    this.faqs.forEach(faq => {
      faq.open = false;
    });

    // 2. Abre solo la pregunta en la que se hizo clic
    //    (si estaba cerrada, ahora se abre)
    if (!currentState) {
      this.faqs[index].open = true;
    }
    // Si ya estaba abierta (currentState == true), el bucle anterior
    // ya la cerró, logrando el efecto de cierre.
  }

  // 👇 AGREGA ESTE MÉTODO AQUÍ 👇
  isAnArray(value: any): boolean {
    return Array.isArray(value);
  }


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

