import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListResponse, PokemonListResult } from '../interface/pokemon-list-response.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'detail'];
  public dataSource: MatTableDataSource<PokemonListResult> = new MatTableDataSource();
  public readonly pageSize: number = 5;
  public page: number = 0;
  public totalHits: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  public changePage(event: PageEvent) {
    this.page = event.pageIndex;
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getList(this.pageSize, this.page * this.pageSize).subscribe((response: PokemonListResponse) => {
      this.dataSource.data = response.results.map(pokemon => ({
        ...pokemon,
        id: parseInt(pokemon.url.split('/').filter(Boolean).pop() || '0'),
      }));
      this.totalHits = response.count
    });
  }
}
