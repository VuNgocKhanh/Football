import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarDate } from '../../providers/core/calendar/calendar-date';
import { CalendarMonth } from '../../providers/core/calendar/calendar-month';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {
  @Output("selectDate") mEventEmitter = new EventEmitter();
  @Input("selected") dateSelected: CalendarDate;

  daysInWeek: Array<string> = ["T2","T3","T4","T5","T6","T7","CN"];
  today: Date = new Date();
  mCalendarMonth: CalendarMonth = new CalendarMonth();
  constructor() {
    console.log('Hello CalendarComponent Component');
    this.onLoadCalendar();
  }

  onLoadCalendar() {
    this.mCalendarMonth.setMonth(this.today.getMonth(), this.today.getFullYear());
  }

  selectDate(dayinmonth : CalendarDate){
      this.dateSelected = dayinmonth;
      this.mEventEmitter.emit(this.dateSelected);
  }

  changeMonth(number: number){
    let newm = this.mCalendarMonth.mm + number;
    if(newm > 11){
        newm = 0;
        let newy = this.mCalendarMonth.yy + 1;
        this.mCalendarMonth.setMonth(newm,newy);
    }else if(newm < 0){
        newm = 11;
        let newy = this.mCalendarMonth.yy - 1;
        this.mCalendarMonth.setMonth(newm,newy);
    }else{
        this.mCalendarMonth.setMonth(newm,this.mCalendarMonth.yy);
    }
    this.dateSelected = null;
    this.mEventEmitter.emit(this.dateSelected);
  }
}
