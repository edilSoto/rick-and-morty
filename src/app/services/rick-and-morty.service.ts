import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  http = inject(HttpClient);

  getCharacters(){
    return this.http.get(`${API_URL}/character`)
  }
}
