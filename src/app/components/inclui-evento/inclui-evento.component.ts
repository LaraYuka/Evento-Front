import { Component } from '@angular/core';
import { Evento, EventoServiceService } from '../../services/evento-service.service';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inclui-evento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inclui-evento.component.html',
  styleUrl: './inclui-evento.component.css'
})
export class IncluiEventoComponent {
  meuForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),
    max_vagas: new FormControl('', [Validators.required, Validators.min(1)]),
    endereco: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
    data_evento: new FormControl('', [Validators.required, this.service.validaData()])
  });
  erro: boolean = false;
  msgErro: string = '';
  constructor(private service: EventoServiceService, private router: Router) {

  }
  enviarEvento() {
    if (this.meuForm.valid) {
      var evento: Evento = {
        id_evento: 0,
        nome: this.meuForm.get('nome')?.value || '',
        descricao: this.meuForm.get('descricao')?.value || '',
        endereco: this.meuForm.get('endereco')?.value || '',
        data_evento: this.meuForm.get('data_evento')?.value || '',
        max_vagas: Number(this.meuForm.get('max_vagas')?.value || 0)
      }
      console.log(evento);

      this.service.addEvento(evento).subscribe(
        (response) => {
          console.log('Evento enviado com sucesso!', response);
          this.router.navigate(['/eventos']);
        },
        (error) => {
          this.erro = true;
          let ret = error.error;
          this.msgErro = ret.erro;
          console.error('Erro ao enviar evento!' + ret.erro, error);
        }
      );
    } else {
      console.error('Formulário Dizok!');
    }

    this.erro = false;
    this.msgErro = '';

  }

}
