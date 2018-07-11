import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the Bd69ManagerClubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd69-manager-club',
  templateUrl: 'bd69-manager-club.html',
})
export class Bd69ManagerClubPage {

  list_club = [
    {
      id: 1,
      name: "Chelsea",
      logo: "",
      time_create: "",
      member: 10,
    }, {
      id: 2,
      name: "Arsenal",
      logo: "",
      time_create: "",
      member: 8,
    }, {
      id: 3,
      name: "Manchester United",
      logo: "",
      time_create: "",
      member: 12,
    }, {
      id: 4,
      name: "Liverpool",
      logo: "",
      time_create: "",
      member: 11,
    }
  ]

  logo: string = "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Reading_FC.svg/1200px-Reading_FC.svg.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mAppModule: AppModuleProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ManagerClubPage');
  }

  onClickClub(club) {
    this.mAppModule.showModal("Bd69ClubsPage", { data: club });
  }

  onCreateClub() {
    this.mAppModule.showModal("Bd69AddClubPage");
  }

}
