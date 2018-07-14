import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AcceptDelineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accept-deline',
  templateUrl: 'accept-deline.html'
})
export class AcceptDelineComponent {
  @Output("onSelect") mEventEmitter = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello AcceptDelineComponent Component');
    this.text = 'Hello World';
  }

  select(number : number){
    this.mEventEmitter.emit(number);
  }

}
