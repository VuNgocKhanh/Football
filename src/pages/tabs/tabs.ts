import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = "LeaguePage";
  tab3Root = "NotificationPage";
  tab4Root = "UsersPage";

  constructor() {

  }
}
