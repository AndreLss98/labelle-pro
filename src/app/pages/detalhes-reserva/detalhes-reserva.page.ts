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

  constructor(
    private routerSnapshot: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.reserva = this.routerSnapshot.snapshot.data.reserva;
    console.log(this.reserva)
  }

}
