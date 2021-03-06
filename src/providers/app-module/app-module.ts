import { Injectable } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { Clubs } from '../classes/clubs';
import { StorageController } from '../core/storage';
import { Storage } from '@ionic/storage';
import { APPKEYS } from './app-keys';


@Injectable()
export class AppModuleProvider {

  mStorageController: StorageController = null;
  constructor(
    public mAlertController: AlertController,
    public mStorage: Storage,
    public mModalController: ModalController
  ) { 
    this.mStorageController = new StorageController();
    this.mStorageController.setStorage(mStorage);
  }

  getStoreController(){
    return this.mStorageController;
  }

  loginSucess(){
    return this.mStorageController.saveDataToStorage(APPKEYS.LOGIN_STATUS,true);
  }

  logout(){
    return this.mStorageController.removeKeyDataFromStorage(APPKEYS.LOGIN_STATUS);
  }
  /**page: Page, params: Params, callback: function after dimiss modal */
  public showModal(page, params?: any, callback?: any): void {
    let modal = this.mModalController.create(page, params ? params : null, {
      enterAnimation: 'fade-in',
      leaveAnimation: 'fade-out'
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (callback) {
        callback(data);
      }
    })
  }

  public showRadio(title: string, arrayInput: Array<{id: number, name: string}>, idselected: number, callback: any){
    let alert = this.mAlertController.create();
    alert.setTitle(title);
    arrayInput.forEach(element => {
      alert.addInput({
        type: 'radio',
        label: element.name,
        value: element.id+"",
        checked: element.id == idselected ? true : false
      })
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        
        callback(data);
      }
    });
    alert.present();
  }

}
