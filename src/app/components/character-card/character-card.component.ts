import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character-response.interface';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  character = input.required<Character>();
}
