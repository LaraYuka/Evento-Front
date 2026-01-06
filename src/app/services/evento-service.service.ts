import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {

  private url = "http://localhost:8000";
  constructor(private http: HttpClient) { }
  //http://localhost:8000/eventos

  getEventos(): Observable<Evento[]> {
    var metodo = "/eventos";
    return this.http.get<Evento[]>(this.url + metodo);
  }

  getEvento(id_evento: number): Observable<Evento> {
    var metodo = "/eventos?id_evento=" + id_evento;
    return this.http.get<Evento>(this.url + metodo);
  }

  addEvento(evento: Evento): Observable<any> {
    var metodo = "/eventos";
    return this.http.post<Evento>(this.url + metodo, evento);
  }

  validaData(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const ValorDoInput = new Date(control.value);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      ValorDoInput.setHours(12, 0, 0, 0);

      if (isNaN(ValorDoInput.getTime())) {
        return { invalidDate: true };
      }

      if (ValorDoInput <= hoje) {
        return { invalidDate: true };
      }


      return null;
    }

  }
  convertDateInputToLocalDate(dateStr: string): Date {
    if (!dateStr) return new Date();
  
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day, 12);
  }
}

export interface Evento {
  id_evento: number;
  nome: string;
  data_evento: string;
  endereco: string;
  descricao: string;
  max_vagas: number;
}

