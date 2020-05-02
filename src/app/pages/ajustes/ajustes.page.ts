import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(
    public userService: UserService,
    public servicosService: ServicosService
  ) {

  }

  ngOnInit() {

  }
}
