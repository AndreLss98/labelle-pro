import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPageRoutingModule } from './ajustes-routing.module';

import { AjustesPage } from './ajustes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CircleImgComponent } from 'src/app/components/circle-img/circle-img.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AjustesPageRoutingModule
  ],
  declarations: [AjustesPage],
  entryComponents: [
    CircleImgComponent
  ]
})
export class AjustesPageModule {}
