import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateLeagePage } from './create-leage';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CreateLeagePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateLeagePage),
    ComponentsModule
  ],
})
export class CreateLeagePageModule {}
