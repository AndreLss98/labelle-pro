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
      sab: false
    }
  }

  constructor() {

  }
}
