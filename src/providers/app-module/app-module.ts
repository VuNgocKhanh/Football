import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Clubs } from '../classes/clubs';
import { StorageController } from '../core/storage';
import { Storage } from '@ionic/storage';
import { APPKEYS } from './app-keys';


@Injectable()
export class AppModuleProvider {

  mStorageController: StorageController = null;
  constructor(
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

}
