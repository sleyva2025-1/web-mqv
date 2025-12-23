import { Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContacUsComponent } from './pages/contac-us/contac-us.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
     
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    { path: 'soporte', component: ContacUsComponent },
    { path: 'conocenos', component: AboutUsComponent },
    { path: 'inicio', component:HomeComponent }


];
