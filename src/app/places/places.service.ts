import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York City.', 
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg', 
      149.99
    ),
    new Place(
      'p2', 
      'L\'Amour Toujours', 
      'A Romantic place in Paris!', 
      'https://www.parisperfect.com/blog/wp-content/uploads/2018/02/paris-perfect-cairanne-2.jpg', 
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://live.staticflickr.com/8079/8408026879_4264a66446_b.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
