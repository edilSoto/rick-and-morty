import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character-response.interface';
import { CharacterCardComponent } from "../character-card/character-card.component";

@Component({
  selector: 'app-character-grid',
  imports: [CharacterCardComponent],
  templateUrl: './character-grid.component.html',
})
export class CharacterGridComponent {
  characters = input.required<Character[]>();
}
