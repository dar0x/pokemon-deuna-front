import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

class PokemonServiceMock {
  getDetail(id: number) {
    return of({
      id,
      name: 'Bulbasaur',
    });
  }
}

const fakeActivatedRoute = {
  snapshot: {
    paramMap: {
      get: () => '1',
    },
  },
};

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      providers: [
        {provide: PokemonService, useClass: PokemonServiceMock},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon details on init', (done) => {
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.pokemon.name).toEqual('Bulbasaur');
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('Bulbasaur');
      done();
    });
  });
});
