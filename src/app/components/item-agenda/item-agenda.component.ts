import { Component, OnInit, Input } from '@angular/core';

import { Reserva } from './../../models/reserva.model';

@Component({
  selector: 'item-agenda',
  templateUrl: './item-agenda.component.html',
  styleUrls: ['./item-agenda.component.scss'],
})
export class ItemAgendaComponent implements OnInit {

  @Input() reserva: Reserva;
  // public endereco: string = '';
  public servicos: string = '';

  constructor() {

  }

  ngOnInit() {
    /* this.endereco = `Rua ${this.reserva.cliente.local.rua}, N° ${this.reserva.cliente.local.numero} - ${this.reserva.cliente.local.setor} - ${this.reserva.cliente.local.cidade} - ${this.reserva.cliente.local.estado}`; */

    this.reserva.servicos.forEach(servico => {
      this.servicos += `${servico.nome} - `;
    })
  }
}
