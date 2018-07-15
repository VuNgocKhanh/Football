import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FbAccountKitController } from '../../providers/core/fb-accountkit/fb-accountkit';
/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {
  phoneNumber : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage : Storage,
    public loadingCtrl: LoadingController,
    public modalController : ModalController
  ) {

    // let loading = this.loadingCtrl.create({
    //   content: 'Please wait...'
    // });  
    // loading.present(); 
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 3000);
    
   this.navCtrl.push("TabsPage");

    // Check data from storage
    // this.storage.get("phone-number").then(data=>{
    //   if(data){
    //     this.navCtrl.setRoot("TabsPage", null,  {
    //       animate : false
    //     })
    //   }else{
    //     this.callAccKit();
    //   }
    // })
  }


  callAccKit(){
    FbAccountKitController._getIntance().register((data)=>{      
      this.phoneNumber = data['phoneNumber'];
      this.setPhoneNumberToStorage(this.phoneNumber);
      this.navCtrl.push("InfoPage")
    });
  }
  
  setPhoneNumberToStorage(phoneNumber : any){
    this.storage.set("phone-number", phoneNumber);
  }
  
  ionViewDidLoad() {}

  ionViewDidEnter(){}

}
