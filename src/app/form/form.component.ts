import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {

  reservation: Reservation = {
    arrivalDate: null,
    departureDate: null
  };

  reservations: Reservation[] = [];

  // arrivalDate:string | null = null;
  // departureDate:string | null = null;

  imageUrl: string = 'assets/img/house.jpeg';

  ngOnInit(){
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
    // this.arrivalDate = localStorage.getItem('selectedDate');
    // this.departureDate = localStorage.getItem('departureDate');
  }

  submitForm(){
    // console.log(this.from.value);
    this.reservations.push(this.reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  saveDate(event: any) {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      alert("That date has passed already.");
      event.target.value = '';
    } else {
      const isDateAvailable = this.isDateAvailable(selectedDate);
      if (!isDateAvailable) {
        alert("This range of date is already reserved, choose another dates.");
        event.target.value = '';
      } else {
        this.reservation.arrivalDate = selectedDate;
      }
    }
  }

  saveDepartureDate(event: any) {
    const departureDate = new Date(event.target.value);
    const arrivalDate = this.reservation.arrivalDate;
    if (arrivalDate && departureDate <= arrivalDate) {
      alert("Departure date must be after arrival date");
      event.target.value = '';
    } else {
      this.reservation.departureDate = departureDate;
    }
  }

  isDateAvailable(selectedDate: Date): boolean {
    for (const reservation of this.reservations) {
      if (
        reservation.arrivalDate &&
        reservation.departureDate &&
        selectedDate >= reservation.arrivalDate &&
        selectedDate <= reservation.departureDate
      ) {
        return false;
      }
    }
    return true;
  }
  
}

interface Reservation {
  arrivalDate: Date | null;
  departureDate: Date | null;
}