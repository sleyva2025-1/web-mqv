import { Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContacUsComponent } from './pages/contac-us/contac-us.component';

export const routes: Routes = [
     
    { path: 'soporte', component: ContacUsComponent },
    { path: 'conocenos', component: AboutUsComponent }
    


];
