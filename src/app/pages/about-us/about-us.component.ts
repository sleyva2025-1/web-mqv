import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule, NgIf } from '@angular/common'
import { NgModule } from '@angular/core'
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardsComponent } from '../../shared/cards/cards.component';
import { CarouselComponent, CarouselItem, SimpleCarouselItem } from '../../shared/carousel/carousel.component';
import { Review, ReviwsComponent } from '../../shared/reviws/reviws.component';
import { ServiciosComponent } from '../../shared/servicios/servicios.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { RouterOutlet } from "@angular/router";


declare var YT: any;
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CardsComponent,
    ReviwsComponent,
    GalleryComponent,
    ServiciosComponent,
    BannerComponent,
    RouterOutlet
],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('videoFrame') videoFrame!: ElementRef;
  @ViewChild('historyContent') historyContent!: ElementRef;
  @ViewChild('esenciaContent') esenciaContent!: ElementRef;
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;


  audioPaused = true;
  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any;

  carouselItems1: CarouselItem[] = [];
  carouselItems2: SimpleCarouselItem[] = [];
  carouselItems3: SimpleCarouselItem[] = [];
  carouselItems4: SimpleCarouselItem[] = [];
  reviewList: Review[] = [];
  galleryItems: Array<{ image: string, title: string, description: string }> = [];

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }


  imagenes: string[] = [
    'assets/images/4.jpeg',
    'assets/images/2.jpeg',
    'assets/images/3.jpeg'
  ];

  currentIndex = 0;
  hover = false;

  get currentImage(): string {
    return this.hover
      ? this.imagenes[(this.currentIndex + 1) % this.imagenes.length]
      : this.imagenes[this.currentIndex];
  }

  onHover() {
    this.hover = true;
  }

  onLeave() {
    this.hover = false;
  }

  onClick() {
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

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
        text: 'Compré dos tours en Más que vacaciones: 1- para el colca y otra para las salinas, ambas en Arequipa. Mi proceso fue súper sencillo, un amigo me recomendó, luego hablé con Mónica que me guió con los precios y comunicaciones, de forma clara y rápida. Lo acordado en hora de salida, informaciones adicionales a tomar en cuenta. En los dos tours pasé súper bien y seguro solo recomiendo!',
        name: 'Camila Diles'
      },
      {
        image: '/assets/clientes/pab.png',
        time: 'Lima',
        stars: 5,
        text: 'Es la agencia que se encarga de mis gestiones laborales y familiares, con la cual se encuentro muy satisfecho por las atenciones apropiadas, la paciencia para atenderme y ayudarme cuando fue necesario, la recomiendo.',
        name: 'Pablo Carhuachin'
      },
      {
        image: '/assets/clientes/a.png',
        time: 'Lima',
        stars: 5,
        text: 'Excelente servicio. Son super atentos, toman en cuenta todos los detalles y hacen que realmente disfrute de las vacaciones. Recomiendo muchísimo los servicios de esta agencia.',
        name: 'Ahyde Ruíz'
      },
      {
        image: '/assets/clientes/i.png',
        time: 'Lima',
        stars: 5,
        text: 'Viajamos a Peru con la agencia más que vacaciones con unas espectativas muy altas pero que se han visto superadas con creces. Una muy buena organización y siempre a pendiente de todo y de cómo estás. Viajar a Peru nos ha sorprendido su comida exquisita y que vamos a decir de sus paisajes, sus pueblos, su gente maravillosa y amable, es decir todo en general ha sido expectacular que recomiendo viajar al menos una vez en la vida. Gracias Más que vacaciones por todo y hasta pronto',
        name: 'Idoia Rodriguez'
      },
      {
        image: '/assets/clientes/erika.png',
        time: 'Arequipa',
        stars: 5,
        text: '100% Recomendado!!! total garantía te asesoran de principio a fin! me encanto su servicio brindado.',
        name: 'Erika Agurto'
      }
    ];

    this.galleryItems = [
      {
        image: '/assets/images/i-service.jpg',
        title: 'Atención Personalizada',
        description: 'Desde que nos contactan para organizar y cotizar su viaje trabajamos en brindar el soporte esencial y necesario para que sientan que viajamos con ellos.'
      },
      {
        image: '/assets/images/our-essence.webp',
        title: 'Clientes contentos',
        description: 'Estamos comprometidos con brindar un excelente soporte a nuestros clientes para que su experiencia de viaje sea buena, agradable y perfecta'
      }
    ];

    this.carouselItems1 = [
      { image: 'assets/logos/aerolineas/latam_logo.png', title: 'Latam ', description: 'Socio aéreo' },
      { image: 'assets/logos/aerolineas/copa_logo.png', title: 'Copa ', description: 'Socio aéreo ' },
      { image: 'assets/logos/aerolineas/sky_logo.png', title: 'Sky ', description: 'Socio aéreo ' },
      { image: 'assets/logos/aerolineas/american_airlines_logo.png', title: 'American ', description: 'Socio aéreo ' },
      { image: 'assets/logos/aerolineas/delta_logo.png', title: 'Delta ', description: 'Socio aéreo ' },
      { image: 'assets/logos/aerolineas/starperu_logo.png', title: 'StarPerú', description: 'Socio aéreo ' },
      { image: 'assets/logos/aerolineas/klm_logo.png', title: 'KLM Royal', description: 'Socio aéreo ' },


      { image: 'assets/logos/hotel/bahia_principe_logo.png', title: 'Bahia Principe Hotels', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/melia_logo.png', title: 'Meliá Hotels International', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/riu_logo.png', title: 'Riu Hotels', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/decameron_logo.png', title: 'Decameron All Inclusive Hotels', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/barcelo_logo.png', title: 'Barceló Hotel Group', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/casa_andina_logo.png', title: 'Casa Andina Hotels', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/belmond_logo.png', title: 'Belmond Hotels', description: 'Socio hotelero ' },
      { image: 'assets/logos/hotel/royal_caribbean_logo.png', title: 'Royal Caribbean International', description: 'Socio de cruceros ' },


      { image: 'assets/logos/costa_icon.png', title: 'Costa Cruceros', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dynamics_Inkasiko.png', title: 'Dynamics Inkasiko', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/logo_eua.png', title: 'Euroamerican Assistance', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/posada_tumpis.png', title: 'Posada de los Tumpis', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/cumbaza_hoteles.png', title: 'Río Cumbaza Hotel', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dm_logo.png', title: 'Dm Hoteles', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/tambo_logo.png', title: 'Hoteles El Tambo Perú', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/ibero_logo.png', title: 'Iberostar Hotels & Resorts', description: 'Proveedor con 10 años de experiencia' },
    ];

    this.carouselItems2 = [
/*       { image: 'assets/logos/respald-icons/protecte-icon.webp', title: 'Protegeme Turismo Responsable' },
 */      { image: 'assets/logos/respald-icons/prom_p-icon.png', title: 'PromPerú' },
      { image: 'assets/logos/respald-icons/min_c-icon.png', title: 'Mincetur' },
      { image: 'assets/logos/respald-icons/agency_r-icon.png', title: 'Agencia de Viajes y Turismo Registrada' },
      { image: 'assets/logos/respald-icons/ytu-icon.webp', title: 'Y tú qué planes' },
      { image: 'assets/logos/respald-icons/marca_Peru-icon.png', title: 'Marca Perú' }
    ];


    this.carouselItems3 = [
      { image: 'assets/logos/respald-icons/protecte-icon.webp', title: 'Protegeme Turismo Responsable' }
      /* { image: 'assets/logos/respald-icons/camera-comercy-icon.png', title: 'CCL Cámara de Comercio de Lima' } */
    ];

    this.carouselItems4 = [
      { image: 'assets/images/1.png', title: '' }
    ];
  }

  ngAfterViewInit(): void {
    // Configurar el reproductor de YouTube
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      (window as any).onYouTubeIframeAPIReady = () => {
        this.initPlayer();
      };
    } else {
      this.initPlayer();
    }


    this.setupAnimations();

    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play().catch(() => {
      });
    }
  }

  initPlayer(): void {
    if (this.videoFrame && this.videoFrame.nativeElement) {
      this.player = new YT.Player(this.videoFrame.nativeElement, {
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    }
  }

  setupAnimations(): void {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('part1')) {
            entry.target.classList.add('animate-slideInLeft');
          } else if (entry.target.classList.contains('part2')) {
            entry.target.classList.add('animate-slideInRight');
          } else if (entry.target.classList.contains('card-item')) {
            entry.target.classList.add('is-visible');
          }
        }
      });
    }, observerOptions);

    // Observar los elementos que necesitan animación
    const part1 = this.historyContent?.nativeElement.querySelector('.part1');
    const part2 = this.historyContent?.nativeElement.querySelector('.part2');
    const cardItems = this.esenciaContent?.nativeElement.querySelectorAll('.card-item');

    if (part1) observer.observe(part1);
    if (part2) observer.observe(part2);
    if (cardItems) {
      cardItems.forEach((card: Element) => observer.observe(card));
    }
  }

  onPlayerReady(event: any): void {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any): void {
    if (event.data === YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
  }

  updateVideoUrl(): void {
    const baseUrl = 'https://www.youtube.com/embed/6HccyI1aBQI';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: this.isMuted ? '1' : '0',
      controls: '0',
      loop: '1',
      playlist: '6HccyI1aBQI',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      iv_load_policy: '3',
      disablekb: '1',
      fs: '0',
      enablejsapi: '1',
      origin: window.location.origin
    });

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}?${params.toString()}`);
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.updateVideoUrl();

    if (this.player) {
      if (this.isMuted) {
        this.player.mute();
      } else {
        this.player.unMute();
      }
    }
  }

  playAudio(): void {
    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play();
    }
  }

  preventPause(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.player && this.player.getPlayerState() === YT.PlayerState.PAUSED) {
      this.player.playVideo();
    }
  }


  toggleAudio(): void {
    const audio = this.audioRef.nativeElement;
    if (audio.paused) {
      audio.play();
      this.audioPaused = false;
    } else {
      audio.pause();
      this.audioPaused = true;
    }
  }



  onAudioEnded() {
    this.audioPaused = true;
  }
  onAudioPaused() {
    this.audioPaused = true;
  }
  onAudioPlayed() {
    this.audioPaused = false;
  }
}

