import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent {
  srch:string="";
  spreadProccess(search:string){
    this.srch=search;
  }
  constructor(public apartmentsService:ApartmentsService){}
}
