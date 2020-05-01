import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    AgendaPageRoutingModule
  ],
  declarations: [AgendaPage],
  entryComponents: [
    CalendarioComponent
  ]
})
export class AgendaPageModule {}
