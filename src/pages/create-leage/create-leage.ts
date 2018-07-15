import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  name_leage = "";
  start_date = "2018-07-09";
  end_date = "2018-07-09";
  arrayInput : Array<{name: string, placeholder: string, value: string, type: string}> = [
    {name: "Tên", placeholder: "Nhập tên đội bóng", value: "", type: "text"},
    {name: "Số đội", placeholder: "Số đội bóng", value: "", type: "number"},
    {name: "Số người", placeholder: "Số người thi đấu trên sân", value: "", type: "number"},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateLeagePage');
  }

  getInput($event,input){
    input.value = $event;
  }

  getValue(){
   
  }
}
