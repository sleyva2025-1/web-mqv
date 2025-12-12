import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
export interface Review {
  image: string;
  time: string;
  stars: number;
  text: string;
  name: string;
}


@Component({
  selector: 'app-reviws',
  standalone: true,
  imports: [NgClass,
    NgStyle,
    NgFor,
    NgIf
  ],
  templateUrl: './reviws.component.html',
  styleUrl: './reviws.component.css'
})
export class ReviwsComponent {

  @Input() reviews: Review[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 3;
  stopedReview: boolean = false;
  currentGap: number = 20
  expandedReviews: { [key: number]: boolean } = {}; // Objeto para controlar la expansión

  private readonly _stopReviews$ = new Subject<void>();

  @HostListener('window:resize')
  handleResize (): void {
    this.adjustItemsToShow();
  }

  ngOnInit(): void {
    this.adjustItemsToShow();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this._stopReviews$.next();
    this._stopReviews$.complete();
  }

  adjustItemsToShow(): void {
    if (window.innerWidth < 768) {
      this.itemsToShow = 1;
      this.currentGap = 20
    } else {
      this.itemsToShow = 3;
      this.currentGap = 20
    }
  }

  startAutoSlide(): void {
    interval(3000)
      .pipe(takeUntil(this._stopReviews$))
      .subscribe(() => {
        if (this.reviews.length > this.itemsToShow) {
          this.currentIndex = (this.currentIndex + 1) % (this.reviews.length - (this.itemsToShow - 1));
        }
      });
  }
  toggleReviews(): void {
    const reviewItems = document.querySelector('.review-items');

    // Agregamos la clase de animación
    reviewItems?.classList.add('animating');

    // Aumentamos el tiempo de espera antes de cambiar el display
    setTimeout(() => {
      if (this.stopedReview) {
        // Reinicia el carrusel
        this.startAutoSlide();
      } else {
        // Detiene el carrusel
        this._stopReviews$.next();
      }

      this.stopedReview = !this.stopedReview; // Cambia el estado

      // Aumentamos también el tiempo antes de quitar la clase de animación
      setTimeout(() => {
        reviewItems?.classList.remove('animating');
      }, 30); // Un poco más de tiempo para estabilizar
    }, 900); // Aumentamos el tiempo de espera para un cambio más gradual
  }

  toggleReadMore(index: number): void {
    this.expandedReviews[index] = !this.expandedReviews[index];
    const reviewText = document.querySelector(`.review-item:nth-child(${index + 1}) .review-text`);
    if (reviewText) {
      reviewText.classList.toggle('expanded');
    }
  }

  truncateText(text: string, index: number): string {
    if (this.expandedReviews[index]) {
      return text;
    }

    const words = text.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
    }

    return text;
  }
  navigateToGoogle() {
    window.open('https://www.google.com/search?sca_esv=aa4709d8f74669be&sxsrf=AHTn8zoj8lh-kiLGFaMXT8FG53ZmOEMxpQ:1739209062674&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZC6xsZ4nn6BHEC4R3vwqPr7Ti7ZIUrsmdnf6hbpHbf6px3I4Qhz7hKJZkR8VdkyznkVUEj0tPB2AL2hHF79RVWMzqsBgf6ODczqqeR8rSZ9kfE5A_u0LKA0502tWnWucQ4AG0M%3D&q=M%C3%A1s+Que+Vacaciones+Agencia+de+viajes+Opiniones&sa=X&ved=2ahUKEwi9s_vS0rmLAxXKrpUCHeexLUkQ0bkNegQILhAD&biw=1366&bih=605&dpr=1#lrd=0x9105d1b811728b65:0xdc1cb95de5468ae1,1,,,,', '_blank');
  }

  get currentFlexItem (): string {
    return `0 0 calc(100% / ${this.itemsToShow} - ${this.currentGap}px)`
  }

  get reviewItemsStyle () {
    return {
      'transform': 'translateX(' + (-this.currentIndex * 100 / this.itemsToShow) + '%)',
      'gap': `${this.currentGap}px`
    }
  }
}
