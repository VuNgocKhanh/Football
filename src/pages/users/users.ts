import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


export interface Users{
  name : string;
  image : string;
} 
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})


export class UsersPage {
  info_user : string = "";
  mClubs : Array<Users> = [
    {name :" Arsenal", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/gun__1357915008_crest1.jpg?itok=tnB-YdQU"},
    {name : "Chelsea", image : "http://minbyaalborg.dk/wp-content/uploads/2013/07/chealsea-logo-390x390.png"},
    {name : "Real Madrid", image : "https://seeklogo.com/images/R/real-madrid-c-f-logo-C08F61D801-seeklogo.com.png"},
    {name : "Barcelona", image : "https://images-na.ssl-images-amazon.com/images/I/61Ap23sZcYL._SL1500_.jpg"},
    {name : "Liverpool", image : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},

  ];

  mRecentClub : Array<Users>= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info_user = "club";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onClickCreateClub(){
    this.navCtrl.push("CreateClubPage");
  }

}
