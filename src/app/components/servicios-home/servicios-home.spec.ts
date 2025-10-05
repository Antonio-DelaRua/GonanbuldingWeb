import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosHome } from './servicios-home';

describe('ServiciosHome', () => {
  let component: ServiciosHome;
  let fixture: ComponentFixture<ServiciosHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
