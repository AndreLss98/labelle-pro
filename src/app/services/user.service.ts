import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Profissional = {
    nome: "Judite Maria da Silva",
    img_perfil: "assets/imgs/woman_1.jpg",
    diasTrabalho: {
      dom: false,
      seg: true,
      ter: true,
      qua: true,
      qui: true,
      sex: true,
      sab: false,
      horario_inicio: "08:00",
      horario_fim: "17:00"
    },
    servicosDisponiveis: [
      { servico_id: 1, valor: 50, disponivel: false },
      { servico_id: 2, valor: 20, disponivel: true },
      { servico_id: 3, valor: 35, disponivel: false }
    ]
  }

  constructor() {

  }
}
