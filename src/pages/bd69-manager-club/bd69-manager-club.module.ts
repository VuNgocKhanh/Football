import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bd69ManagerClubPage } from './bd69-manager-club';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Bd69ManagerClubPage,
  ],
  imports: [
    IonicPageModule.forChild(Bd69ManagerClubPage),
    ComponentsModule
  ],
})
export class Bd69ManagerClubPageModule {}
