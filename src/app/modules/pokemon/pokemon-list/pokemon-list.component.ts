import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonListResponse, PokemonListResult } from '../interface/pokemon-list-response.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements AfterViewInit {
  public readonly pageSize: number = 5;
  public offset: number = 0;
  public displayedColumns: string[] = ['id', 'name', 'detail'];
  public dataSource: MatTableDataSource<PokemonListResult>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pokemonService: PokemonService) {
    this.dataSource = new MatTableDataSource<PokemonListResult>([]);
  }

  ngAfterViewInit() {
    this.pokemonService.getList(this.pageSize, this.offset).subscribe((response: PokemonListResponse) => {
      this.dataSource.data = response.results.map(pokemon => ({
        ...pokemon,
        id: parseInt(pokemon.url.split('/').filter(Boolean).pop() || '0'),
      }));
      this.dataSource.paginator = this.paginator;
    });
  }
}
