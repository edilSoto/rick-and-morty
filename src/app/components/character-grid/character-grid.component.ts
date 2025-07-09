import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character-response.interface';

@Component({
  selector: 'app-character-grid',
  imports: [],
  templateUrl: './character-grid.component.html',
})
export class CharacterGridComponent {
  characters = input.required<Character[]>();
}
