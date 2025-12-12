import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() items = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 1',
      description: 'Descripción breve de la primera imagen.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 2',
      description: 'Descripción breve de la segunda imagen.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Imagen 3',
      description: 'Descripción breve de la tercera imagen.'
    }
  ]

  @Input() image: string = ''
  @Input() title: string = ''
  @Input() description: string = ''
}
