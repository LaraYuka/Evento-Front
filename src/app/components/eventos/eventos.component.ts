import { Component } from '@angular/core';
import { Evento, EventoServiceService } from '../../services/evento-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [HttpClientModule, NgFor, CommonModule, RouterModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoServiceService) {
    this.eventoService.getEventos().subscribe(
      e => {
        this.eventos = e;
      },
      error => {
        console.error('Erro ao carregar eventos', error);
      }
    );
  }
}
