import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Anderson',
        lastName: 'Zanelatto',
        age: '36'
      },
      {
        firstName: 'Monise',
        lastName: 'Minato',
        age: '34'
      },
      {
        firstName: 'José',
        lastName: 'Silva',
        age: '40'
      },
      {
        firstName: 'Alan',
        lastName: 'Brado',
        age: '45'
      },
    ]
    return of(peopleArray);
  }
}
