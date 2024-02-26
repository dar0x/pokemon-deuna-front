import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './common/components/not-found-page/not-found-page.component';
import { UnauthorizedPageComponent } from './common/components/unauthorized-page/unauthorized-page.component';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path: 'not-found/:message',
    component: NotFoundPageComponent
  },
  {
    path: 'unauthorized/:message',
    component: UnauthorizedPageComponent
  },
  {
    path: '**',
    redirectTo: 'pokemon'
  }
];
