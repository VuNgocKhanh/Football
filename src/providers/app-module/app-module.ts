import { Injectable } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { Clubs } from '../classes/clubs';


@Injectable()
export class AppModuleProvider {

  constructor(
    public mModalController: ModalController,
    public mAlerController: AlertController
  ) { }


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
