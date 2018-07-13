import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { Events } from 'ionic-angular/util/events';
import { Storage } from '@ionic/storage';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { APPKEYS } from '../../providers/app-module/app-keys';
export interface Form {
  name: string;
  placeholder: string;
  value: string;
}


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  items: Array<Form> = [
    { name: "name", placeholder: "Nhập tên", value: "" },
    { name: "age", placeholder: "Nhap tuoi", value: "" }
  ];

  name_user: string = "";
  avatar_user: string = "";
  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public mViewController: ViewController
  ) {
  }

  onClickDismiss() {
    this.mViewController.dismiss({

    }, "", {
        animate: false
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

  getInfo(event: any) {
    this.name_user = event.value.toString();
    console.log(this.name_user);

  }

  onClickGetData() {
    this.mAppModule.loginSucess().then(()=>{
      this.navCtrl.push("TabsPage");
    }).catch((err)=>{

    })
  }

}
