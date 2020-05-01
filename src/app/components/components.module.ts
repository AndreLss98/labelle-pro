import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioComponent } from './calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { ItemAgendaComponent } from './item-agenda/item-agenda.component';

@NgModule({
  declarations: [
    CalendarioComponent,
    ItemAgendaComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    CalendarioComponent,
    ItemAgendaComponent
  ]
})
export class ComponentsModule { }
