import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FormInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-input',
  templateUrl: 'form-input.html'
})
export class FormInputComponent {
  @ViewChild("input") myInput;
  @Input("name") name: string = "";
  @Input("type") type: string = "text";
  @Input("placeholder") placeholder: string = "";
  @Input("value") value: string = "";
  @Input("disabled") disabled: boolean = true;
  @Input("no-icon") hiddenIcon : boolean = false;
  @Input("important") important : boolean = false;
  @Output("onInput") mEventEmitter = new EventEmitter();

  text: string;
  constructor() {
    console.log('Hello FormInputComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit(){
    console.log(this.disabled);
    
  }

  showInput(){
    this.disabled = !this.disabled;
    if(!this.disabled){
      setTimeout(() => {
        this.myInput.setFocus();
      }, 150);
    }
  }
  onInput(){
    this.mEventEmitter.emit(this.value);
  }
}
