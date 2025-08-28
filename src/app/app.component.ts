import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webmqv';
}
