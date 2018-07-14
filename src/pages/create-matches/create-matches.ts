import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clubs } from '../../providers/classes/clubs';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the CreateMatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-matches',
  templateUrl: 'create-matches.html',
})
export class CreateMatchesPage {
  club1: Clubs = new Clubs();
  club2: Clubs = new Clubs();
  mClubs: Array<Clubs> = [];
  arrays: Array<{ name: string, values: Array<{ id: number, name: string }>, selected: number }> = [];
  constructor(
    public mAppmodule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateMatchesPage');
    this.club1.setName("Chọn câu lạc bộ");
    this.club2.setName("Chọn câu lạc bộ");
    this.onLoadSelect();
    this.onLoadClub();
  }

  onLoadSelect() {
    this.arrays = [
      { name: "Sân vận động: ", values: [{ id: 0, name: "Sân vận động 1" }, { id: 1, name: "Sân vận động 2" }], selected: 0 },
      { name: "Trọng tài chính: ", values: [{ id: 0, name: "Trọng tài 1" }, { id: 1, name: "Trọng tài 2" }], selected: 0 },
      { name: "Trọng tài biên 1: ", values: [{ id: 0, name: "Trọng tài 1" }, { id: 1, name: "Trọng tài 2" }], selected: 0 },
      { name: "Trọng tài biên 2: ", values: [{ id: 0, name: "Trọng tài 1" }, { id: 1, name: "Trọng tài 2" }], selected: 0 },
    ]
  }

  getChange(value, m) {
    m.selected = value;
  }

  onLoadClub() {
    for (let i = 0; i < 10; i++) {
      let newClub = new Clubs();
      newClub.id = i;
      newClub.setName("Cau lac bo " + (i + 1));
      this.mClubs.push(newClub);
    }
  }

  showRadio(number) {
    if (number == 1) {
      let array = this.mClubs.filter(club => {
        return club.id != this.club2.id;
      })
      this.mAppmodule.showRadio("Chọn câu lạc bộ", array, this.club1.id, (res) => {
        if (res) {
          let index = this.mClubs.findIndex(club => {
            return club.id == res;
          })
          if (index > -1) {
            this.club1 = this.mClubs[index];
          } else {
            this.club1.reset();
            this.club1.setName("Chọn câu lạc bộ");
          }
        }
      })
    }else{
      let array = this.mClubs.filter(club => {
        return club.id != this.club1.id;
      })
      this.mAppmodule.showRadio("Chọn câu lạc bộ", array, this.club2.id, (res) => {
        if (res) {
          console.log(res);
          
          let index = this.mClubs.findIndex(club => {
            return club.id == res;
          })
          if (index > -1) {
            this.club2 = this.mClubs[index];
          } else {
            this.club2.reset();
            this.club2.setName("Chọn câu lạc bộ");
          }
        }
      })
    }

  }

}
