export interface PokemonListResponse {
  count: number;
  next: string;
  previous: any;
  results: PokemonListResult[];
}

export interface PokemonListResult {
  name: string;
  url: string;
  id?: number;
}
