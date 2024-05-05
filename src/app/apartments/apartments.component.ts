import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [SearchComponent, NavbarComponent, FooterComponent,RouterModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent {
  srch:string="";
  spreadProccess(search:string){
    this.srch=search;
  }
  constructor(public apartmentsService:ApartmentsService,private router:Router){}

  searchMatches(search:string,word:string):boolean{
    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word)
      return true;
    return false;
  }

  lookForAppartment(id:number){
    this.router.navigate(['/apartment',id]);
  }
}
