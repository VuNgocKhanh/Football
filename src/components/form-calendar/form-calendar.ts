import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { CalendarDate } from '../../providers/core/calendar/calendar-date';

/**
 * Generated class for the FormCalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-calendar',
  templateUrl: 'form-calendar.html'
})
export class FormCalendarComponent {

  @Input("name") name: string;
  @Output("onDateChange") mEventEmitter = new EventEmitter();
  date: string = "Chưa rõ";
  mCalendarDate: CalendarDate = null;
  constructor(
    public mAppModule: AppModuleProvider
  ) {
    console.log('Hello FormCalendarComponent Component');
  }

  selectDate(){
    this.mAppModule.showModal("SelectDatePage",{params: this.mCalendarDate},(res)=>{
      if(res){
        this.mCalendarDate = res;
        this.date = this.mCalendarDate.getDateString();
        this.mEventEmitter.emit(this.mCalendarDate);
      }
    })
  }
}
