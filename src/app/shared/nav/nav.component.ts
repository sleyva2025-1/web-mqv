import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    NgIf
],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScrolled = false;
  isMenuOpen = false;
  
  // Asegúrate de definir SECTIONS_ROUTES o importarla de donde corresponda
  

  routes = [
    { path: 'INICIO', name: '🏠INICIO' },
    { path: 'conocenos', name: '👥CONÓCENOS' },
    { path: 'soporte', name: '🎧SOPORTE' },
    { 
      path: 'PAQUETES', // Ruta principal (asegúrate que exista en app.routes.ts)
      name: '✈️PAQUETES',
      children: [ // Sub-enlaces
        { path: 'paquetes-nacionales', name: 'PAQUETES NACIONALES' },
        { path: 'paquetes-internacionales', name: 'PAQUETES INTERNACIONALES' }
      ]
    }
    
  ];









  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Corregido el operador lógico
  }

  // Detectar el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }
}
