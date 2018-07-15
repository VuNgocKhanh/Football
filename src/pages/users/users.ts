import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
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

  name_user : string = "";
  avatar_user : string = "";
  mClubsManage : Array<Users> = [
    {name :" Arsenal", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/gun__1357915008_crest1.jpg?itok=tnB-YdQU"},
    {name : "Chelsea", image : "http://minbyaalborg.dk/wp-content/uploads/2013/07/chealsea-logo-390x390.png"},
    {name : "Real Madrid", image : "https://seeklogo.com/images/R/real-madrid-c-f-logo-C08F61D801-seeklogo.com.png"},
    {name : "Barcelona", image : "https://images-na.ssl-images-amazon.com/images/I/61Ap23sZcYL._SL1500_.jpg"},
    {name : "Liverpool", image : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},

  ];

  mClubsJoin : Array<Users> = [
    {name :" Arsenal", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/gun__1357915008_crest1.jpg?itok=tnB-YdQU"},
    {name : "Chelsea", image : "http://minbyaalborg.dk/wp-content/uploads/2013/07/chealsea-logo-390x390.png"},
    {name : "Real Madrid", image : "https://seeklogo.com/images/R/real-madrid-c-f-logo-C08F61D801-seeklogo.com.png"},
    {name : "Barcelona", image : "https://images-na.ssl-images-amazon.com/images/I/61Ap23sZcYL._SL1500_.jpg"},
    {name : "Liverpool", image : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},
    {name : "Tottenham", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8YDLVYVJA_JrjpyXLitihH0pSgngaps3UJQm-Ki6KPYiGbW"},

  ]; 

  mRecentClub : Array<Users>= [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage : Storage
  ) {
    this.info_user = "club";
    this.mRecentClub.push(this.mClubsManage[0]);
    this.mRecentClub.push(this.mClubsManage[1]);
    this.mRecentClub.push(this.mClubsManage[2]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.storage.get("nane_user").then(data=>{
      this.name_user = data;
    })
  }

  onClickCreateClub(){
    this.navCtrl.push("CreateClubPage");
  }

  onClickGoToProfile(){
    this.navCtrl.push("ProfilePage");
  }

  onClickGoToGroup(){
    this.navCtrl.push("GroupPage");
  }
}
