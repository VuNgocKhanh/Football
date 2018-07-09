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
  daysInMonth: Array<CalendarDate> = [];
  today: Date = new Date();
  constructor() {
    console.log('Hello CalendarComponent Component');
    this.onLoadCalendar();
  }

  onLoadCalendar() {
    let calendarMonth = new CalendarMonth();
    calendarMonth.setMonth(this.today.getMonth(), this.today.getFullYear());
    this.daysInMonth = calendarMonth.dates;
  }

  selectDate(dayinmonth : CalendarDate){
    if(dayinmonth.dd > -1 && dayinmonth.dd <= this.today.getDate()){
      this.dateSelected = dayinmonth;
      this.mEventEmitter.emit(this.dateSelected);
    }
  }
}
