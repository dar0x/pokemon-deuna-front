import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailResponse } from '../interface/pokemon-detail-response.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
  public pokemon: PokemonDetailResponse;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {
    const pokemonId: number = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.fetchDetailData(pokemonId)
  }

  ngOnInit(): void {
  }

  private fetchDetailData(id: number) {
    this.pokemonService.getDetail(id).subscribe((response: PokemonDetailResponse) => {
      this.pokemon = response;
    });
  }
}
