import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VideopipeComponent } from './videopipe/videopipe.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { SearchComponent } from './search/search.component';
declare const bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, FooterComponent, HomeComponent, VideopipeComponent, ApartmentsComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'miniproyectoTWeb';
  // constructor(private router: Router) { 
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       const carouselElement = document.querySelector('.carouselTitle') as HTMLElement;

  //       // Crea una instancia del carrusel
  //       const carousel = new bootstrap.Carousel(carouselElement, {
  //           interval: 2000, // Cambia las diapositivas cada 2 segundos (ajusta según tus necesidades)
  //       });
  //     }
  // });
  // }

    // ngOnInit(): void {
    //     // Suscríbete al evento de cambio de ruta

    // }
}
