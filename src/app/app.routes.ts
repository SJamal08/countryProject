import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddCountryComponent } from './pages/add-country/add-country.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-country', component: AddCountryComponent },
  { path: 'pageNotFound', component: Error404Component },
  { path: '**', redirectTo: '/pageNotFound', pathMatch: 'full' }
];
