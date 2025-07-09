import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Character, CharacterResponse, Info } from '../interfaces/character-response.interface';

const API_URL = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  http = inject(HttpClient);
  paginationInfo = signal<Info | null>(null);

  getCharacters(): Observable<Character[]>{
    return this.http.get<CharacterResponse>(`${API_URL}/character`).pipe(
      tap( response => this.paginationInfo.set(response.info)),
      map( response => response.results),
      catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(error))
        })
    )
  }
}
