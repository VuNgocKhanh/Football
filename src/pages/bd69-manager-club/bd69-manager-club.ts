import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Clubs } from '../../providers/classes/clubs';

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
  mClubs: Array<Clubs> = [];


  logo: string = "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Reading_FC.svg/1200px-Reading_FC.svg.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mAppModule: AppModuleProvider
  ) {
  }

  onLoadClub(){
    for(let i = 0; i < 10; i ++){
      let newClub = new Clubs();
      newClub.setLogo(this.logo);
      this.mClubs.push(newClub);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ManagerClubPage');
    this.onLoadClub();
  }

  onClickClub(club) {
    this.mAppModule.showModal("Bd69ClubsPage", { data: club });
  }

  onCreateClub() {
    this.mAppModule.showModal("Bd69AddClubPage");
  }

}
