import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeagePage } from './leage';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LeagePage,
  ],
  imports: [
    IonicPageModule.forChild(LeagePage),
    ComponentsModule
  ],
})
export class LeagePageModule {}
