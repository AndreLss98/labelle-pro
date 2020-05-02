import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioComponent } from './calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { ItemAgendaComponent } from './item-agenda/item-agenda.component';
import { CircleImgComponent } from './circle-img/circle-img.component';

@NgModule({
  declarations: [
    CalendarioComponent,
    ItemAgendaComponent,
    CircleImgComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    CalendarioComponent,
    ItemAgendaComponent,
    CircleImgComponent,
  ]
})
export class ComponentsModule { }
