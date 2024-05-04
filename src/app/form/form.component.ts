import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

imageUrl: string = 'assets/img/house.jpeg';

  submitForm(){

    // console.log(this.from.value);
  }

}
