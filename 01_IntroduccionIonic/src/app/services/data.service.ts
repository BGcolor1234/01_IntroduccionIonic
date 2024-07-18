import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interfaz } from '../Interfaces/interfaz';
import { Character, ApiResponse } from '../Interfaces/interfaznaruto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get<interfaz[]>('/assets/data/menu-opts.json');
  }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPersonajesNaruto(page: number = 10, limit: number = 100): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`https://narutodb.xyz/api/character?page=${page}&limit=${limit}`);
  }
}
