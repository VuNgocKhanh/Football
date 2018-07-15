import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComponentsModule} from '../../components/components.module';
// import { FormInputComponent } from '../../components/form-input/form-input';


export interface Form{
  name: string;
  placeholder : string;
  value : string;
}
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  formList : Array<Form> = [
    {name: "Tên", placeholder: "Nhập tên", value: ""},
    {name: "Địa chỉ", placeholder : "Nhập địa chỉ", value: ""},
    {name : "Vị trí", placeholder : "Nhập vị trí thi đấu", value: ""},
    {name : "Số điện thoại", placeholder: "Nhập số điện thoại", value: ""},
    {name : "Số CMTND", placeholder: "Nhập số CMTND", value: ""}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
