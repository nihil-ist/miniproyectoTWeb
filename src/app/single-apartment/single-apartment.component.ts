import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Apartment } from '../interfaces/apartment';
import { ApartmentsService } from '../apartmentsService/apartments.service';

@Component({
  selector: 'app-single-apartment',
  standalone: true,
  imports: [],
  templateUrl: './single-apartment.component.html',
  styleUrl: './single-apartment.component.css'
})
export class SingleApartmentComponent {
  @Input() apartment!:Apartment;
  constructor(public apartmentService:ApartmentsService, public activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>
      {
        this.apartment = apartmentService.apartments[params['id']];
      }
    );
  }
}
