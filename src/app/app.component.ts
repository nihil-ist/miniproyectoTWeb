import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ApartmentsComponent } from './apartments/apartments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchComponent,ApartmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miniproyectoTWeb';
}
