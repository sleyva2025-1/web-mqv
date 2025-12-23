import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReviwsComponent } from '../../../app/shared/reviws/reviws.component';
import { GalleryComponent } from '../../../app/shared/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviwsComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  reviewList: any[] = [];
  galleryItems: any[] = [];
  carouselItems1: any[] = [];

  ngOnInit(): void {

    this.reviewList = [
      {
        image: '/assets/clientes/p.webp',
        time: 'Lima',
        stars: 5,
        text: 'Excelente servicio y atención personalizada. El equipo de Más Que Vacaciones se encargó de cada detalle de mi viaje, asegurándose de que todo saliera excelente 😁 realmente los recomiendo',
        name: 'Pamela Goicochea'
      },
      {
        image: '/assets/clientes/bra.png',
        time: 'Arequipa',
        stars: 5,
        text: 'Muy buena atención durante la compra de pasajes y seguro de viajes.',
        name: 'Braulio Rugel Robles'
      },
      {
        image: '/assets/clientes/deya.png',
        time: 'Lima',
        stars: 5,
        text: 'Buenísima atención tanto en la coordinación para los paquetes de turismo y en los tours, los guías son muy atentos.',
        name: 'Deyanira Goicochea'
      },
      {
        image: '/assets/clientes/vic.png',
        time: 'Arequipa',
        stars: 5,
        text: 'Tomamos servíos de turismo en Arequipa y fue lo máximo, lo recomiendo.',
        name: 'Victor Manuel Alvarez'
      },
      {
        image: '/assets/clientes/ale.png',
        time: 'Lima',
        stars: 5,
        text: 'La guía muy bien preparada super atenta. La movilidad cómoda y limpia. Muy buen conductor.',
        name: 'Alexandra de Bautista'
      },
      {
        image: '/assets/clientes/osc.png',
        time: 'Sao Paulo',
        stars: 5,
        text: 'Bonita experiencia impresionado con lo bello que es Sao Paulo',
        name: 'Oscar Eduardo Aragon'
      },
      {
        image: '/assets/clientes/jor.png',
        time: 'Lima',
        stars: 5,
        text: 'La agencia nos ha preparado todo muy bien y nos ha ayudado a resolver las incidencias que nos han ocurrido. Sin duda la recomiendo para cualquiera que quiera visitar Perú.',
        name: 'Jorge Gonzalez'
      },
      {
        image: '/assets/clientes/cam.png',
        time: 'Arequipa',
        stars: 5,
        text: 'Compré dos tours en Más que vacaciones: 1- para el colca y otra para las salinas, ambas en Arequipa...',
        name: 'Camila Diles'
      },
      {
        image: '/assets/clientes/pab.png',
        time: 'Lima',
        stars: 5,
        text: 'Es la agencia que se encarga de mis gestiones laborales y familiares...',
        name: 'Pablo Carhuachin'
      },
      {
        image: '/assets/clientes/a.png',
        time: 'Lima',
        stars: 5,
        text: 'Excelente servicio. Son super atentos, toman en cuenta cada detalle.',
        name: 'Ahyde Ruíz'
      },
      {
        image: '/assets/clientes/i.png',
        time: 'Lima',
        stars: 5,
        text: 'Viajamos a Perú con la agencia Más Que Vacaciones...',
        name: 'Idoia Rodriguez'
      },
      {
        image: '/assets/clientes/erika.png',
        time: 'Arequipa',
        stars: 5,
        text: '100% Recomendado!!! total garantía te asesoran de principio a fin!',
        name: 'Erika Agurto'
      }
    ];

    this.galleryItems = [
      {
        image: '/assets/images/i-service.jpg',
        title: 'Atención Personalizada',
        description: 'Desde que nos contactan para organizar su viaje brindamos el soporte esencial.'
      },
      {
        image: '/assets/images/our-essence.webp',
        title: 'Clientes contentos',
        description: 'Comprometidos con brindar un excelente soporte para que disfruten su viaje.'
      }
    ];

    this.carouselItems1 = [
      { image: 'assets/logos/aerolineas/latam_logo.png', title: 'Latam', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/copa_logo.png', title: 'Copa', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/sky_logo.png', title: 'Sky', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/american_airlines_logo.png', title: 'American', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/delta_logo.png', title: 'Delta', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/starperu_logo.png', title: 'StarPerú', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/klm_logo.png', title: 'KLM Royal', description: 'Socio aéreo' },

      { image: 'assets/logos/hotel/bahia_principe_logo.png', title: 'Bahia Principe', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/melia_logo.png', title: 'Meliá Hotels', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/riu_logo.png', title: 'Riu Hotels', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/decameron_logo.png', title: 'Decameron', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/barcelo_logo.png', title: 'Barceló', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/casa_andina_logo.png', title: 'Casa Andina', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/belmond_logo.png', title: 'Belmond', description: 'Socio hotelero' },
      { image: 'assets/logos/hotel/royal_caribbean_logo.png', title: 'Royal Caribbean', description: 'Cruceros' },

      { image: 'assets/logos/costa_icon.png', title: 'Costa Cruceros', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dynamics_Inkasiko.png', title: 'Dynamics Inkasiko', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/logo_eua.png', title: 'Euroamerican Assistance', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/posada_tumpis.png', title: 'Posada de los Tumpis', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/cumbaza_hoteles.png', title: 'Río Cumbaza', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/dm_logo.png', title: 'DM Hoteles', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/tambo_logo.png', title: 'Hoteles El Tambo', description: 'Proveedor con 10 años' },
      { image: 'assets/logos/ibero_logo.png', title: 'Iberostar Hotels', description: 'Proveedor con 10 años' }
    ];
  }


  // -----------------------------------------------------------
  //  Modal funcional para agrandar imágenes en Angular
  // -----------------------------------------------------------
  ngAfterViewInit(): void {

    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("modalImage") as HTMLImageElement;
    const closeBtn = document.querySelector(".close") as HTMLElement;

    const images = document.querySelectorAll(".carrusel img");

    images.forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = (img as HTMLImageElement).src;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}
