import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { Events } from 'ionic-angular/util/events';
import { Storage } from '@ionic/storage';
export interface Form{
  name : string;
  placeholder : string;
  value: string;
}


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  items : Array<Form> = [
    {name : "name", placeholder : "Nhập tên", value : ""},
    {name : "age", placeholder : "Nhap tuoi", value: ""}
  ];

  name_user : string = "";
  avatar_user : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mViewController : ViewController,
    public storage : Storage
    ) {
  }

  onClickDismiss(){
    this.mViewController.dismiss({
      
    },"",{
      animate : false
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  // getInfo(event : any, item : string){
  //   item['value'] = event; 
  //   console.log(item['value']);  
  //   console.log(this.items[0]);
  // }

  getInfo(event : any){
    this.name_user = event.value.toString();
    console.log(this.name_user);
    
  }

  onClickGetData(){
    this.storage.set("name_user", this.name_user);
    this.storage.set("avatar_user", this.avatar_user);
    this.navCtrl.push("TabsPage");
  }

}
