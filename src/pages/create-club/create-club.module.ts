import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateClubPage } from './create-club';

@NgModule({
  declarations: [
    CreateClubPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateClubPage),
  ],
})
export class CreateClubPageModule {}
