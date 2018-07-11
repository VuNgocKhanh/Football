import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clubs } from '../../providers/classes/clubs';

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

  mClub = new Clubs();

  list: Array<any> = [
    { id: "001", name: "nguyen van a", position: "Thủ môn", number: "1", type: 1 },
    { id: "002", name: "nguyen van b", position: "Hậu vệ", number: "3", type: 0 },
    { id: "003", name: "nguyen van c", position: "Tiền đạo", number: "7", type: 0 },
    { id: "004", name: "nguyen van d", position: "Tiền vệ", number: "20", type: 0 },
    { id: "005", name: "nguyen van e", position: "Hậu vệ cánh", number: "9", type: 0 },
    { id: "006", name: "nguyen van f", position: "Tiền đạo cắm", number: "16", type: 0 },
  ]

  index: number = 0;


  list_player: string = "Danh sách";
  info: string = "Thông tin";
  player_type: string = "thành viên";

  club_name: string = "Tên đội bóng";
  club_member: string = "Số thành viên";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    if (this.navParams.get('data')) {
      this.mClub = this.navParams.get('data');
      this.mClub.member = this.list.length
    }

  }


  ionViewDidLoad() {
    console.log(this.mClub);


  }

  isClickList() {
    this.index = 0;
  }

  isClickInfo() {
    this.index = 1;
  }

  getType(type: number): string {
    if (type == 0) {
      return this.player_type = "thành viên";
    }
    if (type == 1) {
      return this.player_type = "quản lý";
    }
  }

}
