import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69ClubsPage } from './bd69-clubs';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69ClubsPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69ClubsPage),
    ComponentsModule
  ],
})
export class Bd69ClubsPageModule {}
