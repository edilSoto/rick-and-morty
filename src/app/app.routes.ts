import { Routes } from '@angular/router';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';

export const routes: Routes = [
    {
        path: 'characters',
        loadComponent: () => CharactersPageComponent
    },
    {
        path: 'episodes',
        loadComponent: () => EpisodesPageComponent
    },
    {
        path: 'locations',
        loadComponent: () => LocationsPageComponent
    },
    {
        path: '**',
        redirectTo: 'characters'
    }
];