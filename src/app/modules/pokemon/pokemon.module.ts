import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatRow,
  MatTable,
  MatTableModule
} from '@angular/material/table';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatAnchor, MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatCardAvatar } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginator,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatAnchor,
    MatButton,
    MatIcon,
    MatMiniFabButton,
    MatCardAvatar,
  ]
})
export class PokemonModule {
}
