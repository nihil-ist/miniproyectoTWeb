import { Injectable } from '@angular/core';
import { APARTMENTS } from './apartments';
import { Apartment } from '../interfaces/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  public apartments:Apartment[]=APARTMENTS;
  constructor() { }
}
