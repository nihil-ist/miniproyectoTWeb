import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { SingleApartmentComponent } from './single-apartment/single-apartment.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'apartments', component: ApartmentsComponent},
    {path: 'apartment/:id', component: SingleApartmentComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
