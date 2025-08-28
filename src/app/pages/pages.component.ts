import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../shared/footer/footer.component";
import { NgModule } from '@angular/core'
import { NavComponent } from "../shared/nav/nav.component";
import { ContacUsComponent } from "./contac-us/contac-us.component";


@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavComponent, ContacUsComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
