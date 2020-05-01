import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public reservas: Reserva[] = [
    {
      dia: 25,
      horario: "08:00",
      profissional: {
        nome: "Maria Judite da Dores",
        local: {
          cidade: "Goiania",
          estado: "GO",
          quadra: 20,
          numero: 12,
          setor: "Marista",
          rua: 1,
          latitude: -16.700691,
          longitude: -49.263776
        }
      },
      servicos: [
        { nome: "Corte", icone_path: "cut_hair.svg", valor: 90},
        { nome: "Unha", icone_path: "nail.svg", valor: 30},
      ]
    }
  ]


  constructor() {

  }

  public getAll() {
    return this.reservas;
  }
}
