import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ReservasService } from '../services/reservas.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaResolverService implements Resolve<any>{

  constructor(
    private reservasService: ReservasService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this.reservasService.getById(id);
  }
}
