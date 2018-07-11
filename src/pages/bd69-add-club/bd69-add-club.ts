import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clubs } from '../../providers/classes/clubs';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the Bd69AddClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd69-add-club',
  templateUrl: 'bd69-add-club.html',
})
export class Bd69AddClubPage {
  title: string = "Thêm đội bóng";
  placeholder: string ="Nhập tên đội bóng";

  mClub = new Clubs();
  club_name: string = "Tên đội bóng";

  type: string = "";
  value: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mAppModule: AppModuleProvider
  ) { }


  // getValue(event) {
  //   this.mClub.name = event;
  // }

  createClub() {
    this.mAppModule.showModal("Bd69ClubsPage", { data: this.mClub });
  }

}
