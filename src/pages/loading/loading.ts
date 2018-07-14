import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { FbAccountKitController } from '../../providers/core/fb-accountkit/fb-accountkit';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { APPKEYS } from '../../providers/app-module/app-keys';
import { TabsPage } from '../tabs/tabs';
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
  phoneNumber: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalController: ModalController,
    public mAppModule: AppModuleProvider
  ) {
  }


  callAccKit() {
    FbAccountKitController._getIntance().register((data) => {
      this.phoneNumber = data['phoneNumber'];
      this.navCtrl.setRoot("InfoPage");
    });
  }



  ionViewDidLoad() { }

  ionViewDidEnter() {
    this.mAppModule.getStoreController().getDataFromStorage(APPKEYS.LOGIN_STATUS).then((res)=>{
      if(res){
        this.onLoginSuccess();
      }else{
        this.callAccKit();
      }
    }).catch((err)=>{
      this.mAppModule.loginSucess().then(()=>{
        this.onLoginSuccess();
      })
    })
  }

  onLoginSuccess(){
    this.navCtrl.setRoot("TabsPage");
  }

}
