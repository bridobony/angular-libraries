import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private jsonUrl = 'config/navbar.json';

  constructor(private http: HttpClient) { }

  getNavbarItems(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
