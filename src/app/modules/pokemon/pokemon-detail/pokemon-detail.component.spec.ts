import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      paramMap: of(new Map([['id', '123']]))
    };

    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
