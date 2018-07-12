import { Component, Input } from '@angular/core';
import { Clubs } from '../../providers/classes/clubs';

/**
 * Generated class for the ListClubComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-club',
  templateUrl: 'list-club.html'
})
export class ListClubComponent {
  @Input("clubs") mClubs: Array<Clubs> = [];
  text: string;

  constructor() {
    console.log('Hello ListClubComponent Component');
    this.text = 'Hello World';
  }

}
