import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaEventoComponent } from './detalha-evento.component';

describe('DetalhaEventoComponent', () => {
  let component: DetalhaEventoComponent;
  let fixture: ComponentFixture<DetalhaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhaEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
