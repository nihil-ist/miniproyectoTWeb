import { AfterViewChecked, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
declare const bootstrap: any;

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent{
  // ngAfterViewChecked(): void {
  //   // Obtiene el elemento del carrusel
  //   const carouselElement = document.querySelector('#carouselTitle') as HTMLElement;

  //   // Crea una instancia del carrusel
  //   const carousel = new bootstrap.Carousel(carouselElement, {
  //       interval: 2000, // Cambia las diapositivas cada 2 segundos (ajusta según tus necesidades)
  //   });
  // }

  onRouteChange(): void {

  }
}
