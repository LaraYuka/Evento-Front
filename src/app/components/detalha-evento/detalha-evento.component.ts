import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento, EventoServiceService } from '../../services/evento-service.service';

@Component({
  selector: 'app-detalha-evento',
  standalone: true,
  imports: [],
  templateUrl: './detalha-evento.component.html',
  styleUrl: './detalha-evento.component.css'
})
export class DetalhaEventoComponent {
  idEvento!: number;
  evento!: Evento;
  constructor(private route: ActivatedRoute,
    private eventoService: EventoServiceService) {
    this.idEvento = Number(this.route.snapshot.paramMap.get('id'));
    console.log("ID Evento: " + this.idEvento);

    this.eventoService.getEvento(this.idEvento).subscribe(
      e => {
        this.evento = e;
        console.log(this.evento);
      },
      error => {
        console.error('Erro ao carregar evento: ' + this.idEvento, error);
      }
    );

  }

  voltarPagina() {
    window.history.back()
  }
}
