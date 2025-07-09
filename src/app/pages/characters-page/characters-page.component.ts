import { Component, inject, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { CharacterGridComponent } from '../../components/character-grid/character-grid.component';

@Component({
  selector: 'app-characters-page',
  imports: [CharacterGridComponent],
  templateUrl: './characters-page.component.html'
})
export class CharactersPageComponent implements OnInit {
  service = inject(RickAndMortyService);

  searchQuery = signal("");

  ngOnInit(): void {
    this.service.getCharacters().subscribe((response) => console.log(response, this.service.paginationInfo()));
  }
  
  characterResource = rxResource({
    request: () => ({query: this.searchQuery()}),
    loader: ({request}) => {
      return this.service.getCharacters()
    }
  })
  
}
