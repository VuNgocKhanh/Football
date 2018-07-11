import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FbAccountKitController } from '../../fb-accountkit/fb-accountkit';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items : Array<any> = ["Arsenal", "Manchester United" , "Chelsea", "Real Madrid", "Barcelona", "Bayern Munich"];
  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  getItems(ev: any) {
    const val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
  }
  }

}
