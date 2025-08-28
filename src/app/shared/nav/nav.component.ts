import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScrolled = false;
  isMenuOpen = false;
  
  // Asegúrate de definir SECTIONS_ROUTES o importarla de donde corresponda
  routes: any[] = []; // Reemplaza con SECTIONS_ROUTES si está definida en otro lugar

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Corregido el operador lógico
  }

  // Detectar el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }
}
