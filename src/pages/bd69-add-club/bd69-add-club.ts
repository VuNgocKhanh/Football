import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  name: string = "Club Name";
  type: string = "";
  placeholder: string = "Fill club name";
  value: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mModalController: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bd69AddClubPage');
  }

  getValue(event) {
    this.value = event;
  }

  createClub() {
    let mModal = this.mModalController.create("Bd69ClubsPage", { data: this.value })
    mModal.present();
  }

}
