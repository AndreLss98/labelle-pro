import { Component, OnInit, Input } from '@angular/core';

import { Reserva } from './../../models/reserva.model';

@Component({
  selector: 'item-agenda',
  templateUrl: './item-agenda.component.html',
  styleUrls: ['./item-agenda.component.scss'],
})
export class ItemAgendaComponent implements OnInit {

  @Input() reserva: Reserva;
  public endereco: string = '';
  public servicos: string = '';

  constructor() {

  }

  ngOnInit() {
    this.endereco = `Rua ${this.reserva.profissional.local.rua}, N° ${this.reserva.profissional.local.numero} - ${this.reserva.profissional.local.setor} - ${this.reserva.profissional.local.cidade} - ${this.reserva.profissional.local.estado}`;

    this.reserva.servicos.forEach(servico => {
      this.servicos += `${servico.nome} - `;
    })
  }
}
