import { Component } from '@angular/core';
import { VideopipeComponent } from '../videopipe/videopipe.component';

@Component({
  selector: 'app-home-cont',
  standalone: true,
  imports: [VideopipeComponent],
  templateUrl: './home-cont.component.html',
  styleUrl: './home-cont.component.css'
})
export class HomeContComponent {

}
