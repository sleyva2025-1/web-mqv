import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

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
export class NavComponent implements OnInit {

  isScrolled = false;
  isMenuOpen = false;
  
  // Variable para el idioma actual
  currentLang: string = 'es';

  routes = [
    { path: 'inicio', name: '🏠INICIO' },
    { path: 'conocenos', name: '👥CONÓCENOS' },
    { path: 'soporte', name: '🎧SOPORTE' },
    { 
      path: 'PAQUETES', 
      name: '✈️PAQUETES',
      children: [ 
        { path: 'paquetes-nacionales', name: 'PAQUETES NACIONALES' },
        { path: 'paquetes-internacionales', name: 'PAQUETES INTERNACIONALES' }
      ]
    }
  ];

  // ✅ Lógica de inicialización del idioma
  ngOnInit() {
    // Al cargar, leemos la cookie para saber qué botón pintar
    if (typeof document !== 'undefined' && document.cookie && document.cookie.includes('/en')) {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'es';
    }
  }

  // ✅ Función para traducir y recargar
  translatePage(lang: string) {
    // '/es/en' = De Español a Inglés, '/es/es' = Original
    const googleValue = lang === 'es' ? '/es/es' : '/es/en';

    // Guardamos la cookie necesaria para Google
    document.cookie = `googtrans=${googleValue}; path=/`; 
    document.cookie = `googtrans=${googleValue}; path=/; domain=${window.location.hostname}`;

    // Recargamos la página para aplicar cambios
    window.location.reload();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }
}