import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notificacao-reserva',
  templateUrl: './notificacao-reserva.component.html',
  styleUrls: ['./notificacao-reserva.component.scss'],
})
export class NotificacaoReservaComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) {

  }

  ngOnInit() {

  }

  public closeNotification() {
    this.modalCtrl.dismiss();
  }

}
