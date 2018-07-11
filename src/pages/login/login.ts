import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FbAccountKitController } from '../../fb-accountkit/fb-accountkit';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  phoneNumber : string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage : Storage
  ) {
    // this.checkPhoneNumber();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  


}
