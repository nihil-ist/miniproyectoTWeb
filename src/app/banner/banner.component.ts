import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'; 

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  tiles: Tile[] = [
    {text: 'live in your dream house, at least for a day', cols: 4, rows: 8, color: 'url(../../assets/img/nyc.gif)'},
    
    // {text: 'Two', cols: 1, rows: 8, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 4, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 4, color: 'url(../../assets/img/logo2.png)'},
  ];
}
