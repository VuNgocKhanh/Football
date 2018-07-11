import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Tables{
  logo: string;
  name: string;
  win: number;
  lose: number;
  thwart: number;
  constructor(){
    this.name = "FC Lorem ";
    this.win = 6;
    this.lose = 2;
    this.thwart =  1;
    this.logo = "https://upload.wikimedia.org/wikipedia/vi/5/53/Arsenal_FC.svg";
  }

  getScore(): number{
    return this.win * 3 + this.thwart;
  }
}

@IonicPage()
@Component({
  selector: 'page-leage',
  templateUrl: 'leage.html',
})
export class LeagePage {
  menuList: Array<{id: number, name: string, icon?:string}> = [
    {id: 0, name: "Bảng xếp hạng"},
    {id: 1, name: "Lịch thi đấu"},
    {id: 2, name: "Câu lạc bộ"}
  ];
  menuSelectedID: number = 0;
  tables = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagePage');
    for(let i =0; i < 10; i ++){
      this.tables.push(new Tables());
    }
  }

  getSelect($event){
    this.menuSelectedID = parseInt($event);
  }

}
