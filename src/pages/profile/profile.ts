import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PersonInfo{
  name : string;
  address: string;
  phoneNumber : string;
  position : string; 
}

export interface StatInfo{
  name : string;
  height : string;
  weight : string;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  personInfoList : Array<PersonInfo> = [
    { name : "Thông tin", address : "AAA", phoneNumber : "012324", position : "Strike"},
  ];

  statInfoList : Array<StatInfo> = [
    {name: "Chỉ số", height: "180", weight : "70"}
  ];

  tabSelected :number = 0;
  showPersonInfo : boolean = true;
  showStatInfo : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  onClickEditProfile(){
    this.navCtrl.push("EditProfilePage");
  }

  // onClickTab(tab : Tabs){
  //   this.tabSelected = tab.id;
  //   if(this.tabSelected == 0){
  //     this.showStatInfo = false;
  //     this.showPersonInfo = true;
  //   }
  //   else if(this.tabSelected == 1){
  //     this.showStatInfo = true;
  //     this.showPersonInfo = false;
  //   }
  // }

}
