import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leagues } from '../../providers/classes/league';

/**
 * Generated class for the CreateLeagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-leage',
  templateUrl: 'create-leage.html',
})
export class CreateLeagePage {
  newLeague: Leagues = new Leagues();
  start_date = "2018-07-09";
  end_date = "2018-07-09";
  arrayInput : Array<{name: string, placeholder: string, value: string, type: string}> = [
    {name: "Tên", placeholder: "Nhập tên giải đấu", value: "", type: "text"},
    {name: "Số đội", placeholder: "Số đội bóng", value: "", type: "number"},
    {name: "Số người", placeholder: "Số người tối đa đăng kí", value: "", type: "number"},
    {name: "Đội thắng", placeholder: "Số điểm cho đội thắng", value: "", type: "number"},
    {name: "Đội hoà", placeholder: "Số điểm cho đội hoà", value: "", type: "number"},
    {name: "Đội thua", placeholder: "Số điểm cho đội thua", value: "", type: "number"},
    {name: "Cầu thủ", placeholder: "Số người đá trên sân", value: "", type: "number"}
  ];

  marrays: Array<{id: number, name: string}> = [
    {id: 0, name: "Vòng tròn"},
    {id: 1, name: "Chia bảng"}
  ];

  mselected: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getSelected($event){
    this.mselected = $event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateLeagePage');
  }

  getInput($event,input){
    input.value = $event;
  }

  getValue(){
   
  }

  getChange($event){
    console.log("Change date .. ",$event);
    
  }
}
