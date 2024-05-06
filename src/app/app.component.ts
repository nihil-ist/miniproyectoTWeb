import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { TableComponent } from "./table/table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormComponent, InfoComponent, TableComponent]
})
export class AppComponent {
  title = 'miniproyectoTWeb';
}
