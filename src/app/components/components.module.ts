import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioComponent } from './calendario/calendario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
  ],
  exports: [
    CalendarioComponent
  ]
})
export class ComponentsModule { }
