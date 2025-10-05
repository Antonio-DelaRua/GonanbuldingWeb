import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryTrabajos } from './galery-trabajos';

describe('GaleryTrabajos', () => {
  let component: GaleryTrabajos;
  let fixture: ComponentFixture<GaleryTrabajos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleryTrabajos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryTrabajos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
