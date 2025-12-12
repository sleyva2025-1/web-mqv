// servicios.component.ts
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Servicio {
  icono: string;
  titulo: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ServiciosComponent {
  expandido: boolean = true;

  // Servicios iniciales (siempre visibles)
  serviciosPrincipales: Servicio[] = [
    {
      icono: 'flight',
      titulo: 'Boletos nacionales e internacionales'
    },
    {
      icono: 'emoji_events',
      titulo: 'Viajes de incentivo'
    },
    {
      icono: 'family_restroom',
      titulo: 'Viajes en familia'
    },
    {
      icono: 'school',
      titulo: 'Viajes escolares'
    },
    {
      icono: 'directions_bus',
      titulo: 'Programas nacionales e internacionales'
    }
  ];

  // Servicios adicionales (visibles al expandir)
  serviciosAdicionales: Servicio[] = [

    {
      icono: 'directions_car',
      titulo: 'Alquiler de autos & traslados'
    },
    {
      icono: 'directions_boat',
      titulo: 'Cruceros'
    },
    {
      icono: 'diamond',
      titulo: 'Evento de bodas & Luna de miel'
    },
    {
      icono: 'health_and_safety',
      titulo: 'Seguro de asistencia'
    },
    {
      icono: 'hiking',
      titulo: 'Full days'
    }
  ];

  toggleExpansion() {
    this.expandido = !this.expandido;
  }


}
