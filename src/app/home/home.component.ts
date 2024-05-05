import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeContComponent } from '../home-cont/home-cont.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, FooterComponent, NavbarComponent, HomeContComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
