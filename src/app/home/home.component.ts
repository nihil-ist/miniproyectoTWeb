import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeContComponent } from '../home-cont/home-cont.component';

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, FooterComponent, NavbarComponent, HomeContComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // Obtiene el elemento del carrusel
    // const carouselElement = document.querySelector('#carouselTitle') as HTMLElement;

    // // Crea una instancia del carrusel
    // const carousel = new bootstrap.Carousel(carouselElement, {
    //     interval: 2000, // Cambia las diapositivas cada 2 segundos (ajusta según tus necesidades)
    // });
  }
}
