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
      cliente: {
        nome: "Maria Judite da Dores",
        img_perfil: "assets/imgs/woman_1.png"
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
