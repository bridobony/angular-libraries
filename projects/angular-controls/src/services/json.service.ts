import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor() { }

  getModel<T>(jsonUrl: string): Observable<T> {
    return from(
      fetch(jsonUrl).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
      })
    );
  }
}
