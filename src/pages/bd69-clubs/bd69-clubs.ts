import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Bd69ClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bd69-clubs',
  templateUrl: 'bd69-clubs.html',
})
export class Bd69ClubsPage {

  list = [
    { id: "001", name: "nguyen van a", type: 1 },
    { id: "002", name: "nguyen van b", type: 0 },
    { id: "003", name: "nguyen van c", type: 0 },
    { id: "004", name: "nguyen van d", type: 0 },
    { id: "005", name: "nguyen van e", type: 0 },
    { id: "006", name: "nguyen van f", type: 0 },
  ]

  name: string = "";
  index: number = 0;

  list_player: string = "Danh sách";
  info: string = "Thông tin";
  player_type: string = "thành viên";

  club_name: string = "Tên đội bóng";
  club_name_: string = "";
  club_member: string = "Số thành viên";
  club_member_: number = 0

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.club_name_ = this.navParams.get('data');
    this.club_member_ = this.list.length
  }


  ionViewDidLoad() {


  }

  isClickList() {
    this.index = 0;
  }

  isClickInfo() {
    this.index = 1;
  }

  getType(type: number): string {
    if(type == 0){
      return this.player_type = "thành viên";
    }
    if(type == 1){
      return this.player_type = "quản lý";
    }
  }

}
