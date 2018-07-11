import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      member: 10
    }, {
      id: 2,
      name: "Arsenal",
      logo: "",
      time_create: "",
      member: 8
    }, {
      id: 3,
      name: "Manchester United",
      logo: "",
      time_create: "",
      member: 12
    }, {
      id: 4,
      name: "Liverpool",
      logo: "",
      time_create: "",
      member: 11
    }
  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69ManagerClubPage');
  }

}
