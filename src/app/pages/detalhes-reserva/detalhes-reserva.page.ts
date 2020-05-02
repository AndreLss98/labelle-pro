import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/models/reserva.model';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.page.html',
  styleUrls: ['./detalhes-reserva.page.scss'],
})
export class DetalhesReservaPage implements OnInit {

  public reserva: Reserva;
  public valorTotal: number;

  constructor(
    private routerSnapshot: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.reserva = this.routerSnapshot.snapshot.data.reserva;
    this.valorTotal = this.reserva.servicos.reduce((acumulador, servico) => acumulador + servico.valorPago, 0)
  }

}
