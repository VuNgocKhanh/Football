import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-player',
  templateUrl: 'list-player.html'
})
export class ListPlayerComponent {
  @Input("listPlayer") listPlayer: Array<any> = [];
  @Input("name") name: string = "";

  title_position: "Vị trí";
  title_number_player: "Số áo";
  title: string = "";

  avatarUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Reading_FC.svg/1200px-Reading_FC.svg.png";

  constructor() {
    this.title = "Danh sách cầu thủ";
    this.title_position = "Vị trí";
    this.title_number_player = "Số áo";
  }
}
