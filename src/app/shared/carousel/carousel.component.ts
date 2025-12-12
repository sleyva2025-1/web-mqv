import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

export interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

export interface SimpleCarouselItem {
  image: string;
  title: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="carousel-container">
  <div class="carousel-navigation" *ngIf="showNavigation">
    <div class="button-group">
      <button
        (click)="prevSlide()"
        [disabled]="currentIndex === 0"
        class="nav-button"
      >
        <img src="assets/images/before.webp" alt="Anterior" class="button-icon" />
      </button>
      <button
        (click)="nextSlide()"
        [disabled]="currentIndex >= items.length - itemsToShow"
        class="nav-button"
      >
        <img src="assets/images/next.webp" alt="Siguiente" class="button-icon" />
      </button>
    </div>
  </div>

  <div class="carousel-content">
    <div
      class="carousel-items"
      [style.transform]="'translateX(' + (-currentIndex * (100 / itemsToShow)) + '%)'"
    >
      <div *ngFor="let item of items" class="carousel-item">
        <img [src]="item.image" [alt]="item.title" />
        <h3>{{ item.title }}</h3>
        <p *ngIf="hasDescription(item)">{{ getDescription(item) }}</p>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() showNavigation: boolean = true;
  @Input() items: Array<CarouselItem | SimpleCarouselItem> = [];
  @Input() itemsToShow: number = 4; // Por defecto, 4 items
  @Input() autoRotate: boolean = true;
  @Input() rotationInterval: number = 3000; // 3 segundos por defecto

  currentIndex = 0;
  private autoRotateInterval: any;

  ngOnInit(): void {
    this.adjustItemsToShow(); // Ajustar la cantidad de items al cargar el componente
    window.addEventListener('resize', this.adjustItemsToShow.bind(this)); // Listener para cambios en el tamaño de pantalla

    if (this.autoRotate) {
      this.startAutoRotation();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoRotation();
    window.removeEventListener('resize', this.adjustItemsToShow.bind(this));
  }

  private startAutoRotation(): void {
    this.autoRotateInterval = setInterval(() => {
      if (this.currentIndex < this.items.length - this.itemsToShow) {
        this.nextSlide();
      } else {
        this.currentIndex = 0; // Volver al inicio cuando llegue al final
      }
    }, this.rotationInterval);
  }

  private stopAutoRotation(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.items.length - this.itemsToShow) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  hasDescription(item: CarouselItem | SimpleCarouselItem): boolean {
    return 'description' in item;
  }

  getDescription(item: CarouselItem | SimpleCarouselItem): string {
    return this.hasDescription(item) ? (item as CarouselItem).description : '';
  }

  private adjustItemsToShow(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.itemsToShow = 1;
    } else {
      this.itemsToShow = 4;
    }
  }
}
