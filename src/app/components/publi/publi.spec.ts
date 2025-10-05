import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publi } from './publi';

describe('Publi', () => {
  let component: Publi;
  let fixture: ComponentFixture<Publi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Publi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
