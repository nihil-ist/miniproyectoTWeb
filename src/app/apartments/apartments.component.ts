import { Component } from '@angular/core';
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

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [SearchComponent, NavbarComponent, FooterComponent, CommonModule, MatDialogModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css'
})
export class ApartmentsComponent {
  srch:string="";
  dialogboolean: boolean = true;
  spreadProccess(search:string){
    this.srch=search;
    this.dialogboolean = true;

  }
  constructor(public apartmentsService:ApartmentsService, public dialog: MatDialog){

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


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog {}
