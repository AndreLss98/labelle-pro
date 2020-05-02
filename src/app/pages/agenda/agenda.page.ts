import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { ReservasService } from 'src/app/services/reservas.service';
import { NotificacaoReservaComponent } from 'src/app/modals/notificacao-reserva/notificacao-reserva.component';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    public reservaService: ReservasService,
  ) {

  }

  ngOnInit() {

  }

  public goToAjustes() {
    this.router.navigateByUrl('/ajustes');
  }

  public openNotification() {
    this.modalCtrl.create({ component: NotificacaoReservaComponent }).then((modal) => {
      modal.present();
    });
  }
}
