import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonService } from '../services/pokemon.service';
import { of } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

class PokemonServiceMock {
  getList() {
    return of({count: 100, results: [{name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/'}]});
  }
}

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'detail/:id', component: PokemonDetailComponent }]),
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: PokemonService, useClass: PokemonServiceMock}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemon list on init', () => {
    const service = TestBed.inject(PokemonService);
    spyOn(service, 'getList').and.callThrough();
    component.ngOnInit();
    expect(service.getList).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBeGreaterThan(0);
    expect(component.totalHits).toEqual(100);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Listado de Pokemones');
  });
});
