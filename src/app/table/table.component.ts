import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormComponent,FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
}
