import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SearchTopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-top',
  templateUrl: 'search-top.html'
})
export class SearchTopComponent {
  @Input("icon-left") isHaveIconLeft: boolean = false;
  @Input("icon-right") isHaveIconRight: boolean = false;
  @Input("disabled") isDisabled: boolean = false;

  @Output("onSelectRight") mEventEmiter = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello SearchTopComponent Component');
    this.text = 'Hello World';
  }

  onClickRight(){
    this.mEventEmiter.emit();
  }

}
