import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  },
];
