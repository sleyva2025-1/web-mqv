import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images = [
    '/assets/clientes/client-section/img2.jpg',
    '/assets/clientes/client-section/img3.jpg',
    '/assets/clientes/client-section/img4.jpg',
    '/assets/clientes/client-section/img5.jpg',
    '/assets/clientes/client-section/img6.jpg',
    '/assets/clientes/client-section/img7.jpg',
    '/assets/clientes/client-section/img19.jpg',
    '/assets/clientes/client-section/img8.jpg',
    '/assets/clientes/client-section/img9.jpg',
    '/assets/clientes/client-section/img10.jpg',
    '/assets/clientes/client-section/img11.jpg',
    '/assets/clientes/client-section/img12.jpg',
    '/assets/clientes/client-section/img13.jpg',
    '/assets/clientes/client-section/img15.jpg',
    '/assets/clientes/client-section/img16.jpg',
    '/assets/clientes/client-section/img17.jpg',
    '/assets/clientes/client-section/img18.jpg',
    '/assets/clientes/client-section/foto1.jpg',
  ];

  showAllImages = false;
  selectedImage: string | null = null;
  currentIndex = 0;
  allImages: string[] = [];



  highlightedImages: string[] = [];
  secondaryImages: string[] = [];
  initialImages: string[] = [];


  constructor() {
    this.prepareImages();
  }

  changeImages() {
    this.prepareImages();
  }

  toggleGallery(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showAllImages = !this.showAllImages;
  }

  openImage(img: string, index: number) {
    this.selectedImage = img;
    this.currentIndex = index;
  }

  closeImage(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.selectedImage = null;
  }

  navigateImage(direction: number, event: Event) {
    event.stopPropagation();
    const newIndex = this.currentIndex + direction;

    if (newIndex >= 0 && newIndex < this.images.length) {
      this.currentIndex = newIndex;
      this.selectedImage = this.images[newIndex];
    }
  }

  shuffleArray<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  prepareImages() {
    this.highlightedImages = this.images.slice(8, 14);
    this.secondaryImages = this.images.slice(6, 9);
    this.initialImages = this.images.slice(0, 6);
    this.allImages = this.images.slice(0, 25);
  }







}
