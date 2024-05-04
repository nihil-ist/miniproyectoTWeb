import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideopipeComponent } from "./videopipe/videopipe.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, VideopipeComponent]
})
export class AppComponent {
  title = 'miniproyectoTWeb';
}
