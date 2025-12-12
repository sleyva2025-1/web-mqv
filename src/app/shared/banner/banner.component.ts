import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core'
import { type SafeResourceUrl } from '@angular/platform-browser'



@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule, // Agrega esto para que `ngIf` y otras directivas funcionen
    NgIf,
    NgStyle
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input() title?: string
  @Input() urlImage?: string
  @Input() videoUrl?: string | SafeResourceUrl
  @Input() isVideo: boolean = false

  get backgroundImage (): string {
    return `url(/assets/images/${this.urlImage})`
  }
}
