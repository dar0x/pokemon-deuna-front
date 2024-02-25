import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListResponse, PokemonListResult } from '../interface/pokemon-list-response.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'detail'];
  dataSource: MatTableDataSource<PokemonListResult> = new MatTableDataSource<PokemonListResult>(ELEMENT_DATA.results);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngAfterViewInit() {
    const updatedResults = ELEMENT_DATA.results.map(pokemon => ({
      ...pokemon,
      id: parseInt(pokemon.url.split('/').filter(Boolean).pop() || '0'),
    }));
    this.dataSource = new MatTableDataSource<PokemonListResult>(updatedResults)
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: PokemonListResponse = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      name: "charmeleon x2",
      url: "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      name: "charmeleon x3",
      url: "https://pokeapi.co/api/v2/pokemon/6/"
    }
  ]
};
