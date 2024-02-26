import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnauthorizedPageComponent } from './unauthorized-page.component';
import { ActivatedRoute } from '@angular/router';

describe('UnauthorizedPageComponent', () => {
  let component: UnauthorizedPageComponent;
  let fixture: ComponentFixture<UnauthorizedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthorizedPageComponent],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => 'Some error message',
              },
            },
          }
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('401');
    expect(compiled.querySelector('p')?.textContent).toContain('Some error message');
  });
});
