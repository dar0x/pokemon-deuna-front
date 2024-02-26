import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;
  const mockApi = environment.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve list of pokemons', () => {
    const dummyPokemonList = { results: [] };
    const limit = 10;
    const offset = 0;

    service.getList(limit, offset).subscribe(pokemons => {
      expect(pokemons.results.length).toBe(0);
    });

    const req = httpMock.expectOne(`${mockApi}/pokemon?limit=${limit}&offset=${offset}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemonList);
  });

  it('should retrieve pokemon detail', () => {
    const dummyPokemonDetail = { name: 'bulbasaur' };
    const id = 1;

    service.getDetail(id).subscribe(detail => {
      expect(detail.name).toEqual('bulbasaur');
    });

    const req = httpMock.expectOne(`${mockApi}/pokemon/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemonDetail);
  });
});
