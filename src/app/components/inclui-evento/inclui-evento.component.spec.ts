import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluiEventoComponent } from './inclui-evento.component';

describe('IncluiEventoComponent', () => {
  let component: IncluiEventoComponent;
  let fixture: ComponentFixture<IncluiEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncluiEventoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluiEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
