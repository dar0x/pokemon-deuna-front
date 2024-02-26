import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageTextComponent } from './message-text.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonDetailComponent } from '../../../modules/pokemon/pokemon-detail/pokemon-detail.component';

describe('MessageTextComponent', () => {
  let component: MessageTextComponent;
  let fixture: ComponentFixture<MessageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'detail/:id', component: PokemonDetailComponent }]),
        MessageTextComponent,
        RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
