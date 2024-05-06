import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, RouterModule, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  constructor(private router: Router, public apartmentsService:ApartmentsService) {
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            const carouselElement = document.querySelector('.carouselTitle') as HTMLElement;
    
            // Crea una instancia del carrusel
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 2000, // Cambia las diapositivas cada 2 segundos (ajusta según tus necesidades)
            });
          }
      });
   }

  srch:string="";
  spreadProccess(search:string){
    this.srch=search;
  }

  

  searchMatches(search:string,word:string):boolean{
    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word)
      return true;
    return false;
  }
}
