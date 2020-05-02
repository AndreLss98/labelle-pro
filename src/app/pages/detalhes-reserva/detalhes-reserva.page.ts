import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.page.html',
  styleUrls: ['./detalhes-reserva.page.scss'],
})
export class DetalhesReservaPage implements OnInit {

  constructor(
    private routerSnapshot: ActivatedRoute
  ) {

  }

  ngOnInit() {
    console.log(this.routerSnapshot.snapshot);
  }

}
