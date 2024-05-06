import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApartmentsService } from '../apartmentsService/apartments.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Apartment } from '../interfaces/apartment';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [SearchComponent, NavbarComponent, FooterComponent, CommonModule, MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, RouterModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent {

  ngAfterViewInit() {
    // const carouselElement = document.querySelector('#carouselTitle') as HTMLElement;

    // // Crea una instancia del carrusel
    // const carousel = new bootstrap.Carousel(carouselElement, {
    //     interval: 2000, // Cambia las diapositivas cada 2 segundos (ajusta según tus necesidades)
    // });
  }
  
  srch:string="";
  dialogboolean: boolean = true;
  spreadProccess(search:string){
    this.srch=search;
    this.dialogboolean = true;

  }
  constructor(public apartmentsService:ApartmentsService, public dialog: MatDialog, private router:Router){

  }


  imgCarousel = {
    'width': '100%',
    display: 'block',
    'border-radius': '5%'
  }

  openDialog() {
    if(this.dialogboolean) {
      this.dialog.open(DialogElementsExampleDialog);
      this.dialogboolean = false;
    } 
  }

  searchMatches(search:string,word:string):boolean{

    search = search.toLowerCase();
    word = word.toLowerCase();
    console.log(search+","+word);
    if(word.includes(search) || search === word){
      return true;
    }
    return false;
  }

  searchExists(search: string, array: Apartment[]): boolean {

    for (let apartment of array) {
      if(this.searchMatches(search, apartment.owner) || this.searchMatches(search,apartment.city)){
        return true;
      }
    }
    return false;
    
  }


  lookForAppartment(id:number){
    this.router.navigate(['/apartment',id]);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog {}
