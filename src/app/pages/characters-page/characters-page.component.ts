import { Component, inject, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-characters-page',
  imports: [],
  templateUrl: './characters-page.component.html'
})
export class CharactersPageComponent implements OnInit {
  service = inject(RickAndMortyService);

  ngOnInit(): void {
    this.service.getCharacters().subscribe((response) => console.log(response));
  }
  

  
}
