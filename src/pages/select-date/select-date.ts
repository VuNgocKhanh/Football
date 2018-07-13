import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CalendarDate } from '../../providers/core/calendar/calendar-date';

/**
 * Generated class for the SelectDatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-date',
  templateUrl: 'select-date.html',
})
export class SelectDatePage {

  mCalendarDate: CalendarDate = null;
  constructor(
    public mViewController: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectDatePage');
    this.onLoadParams();
  }

  getSelectedDate($event){
    this.mCalendarDate = $event;
    console.log("selected date .. ",$event);
    
  }

  onLoadParams(){
    if(this.navParams.data["params"]){
      this.mCalendarDate = this.navParams.get("params");
    }
  }

  closeView(){
    this.mViewController.dismiss(this.mCalendarDate);
    console.log("close view ..", this.mCalendarDate);
    
  }
}
