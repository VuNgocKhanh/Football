import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';
import { ListPlayerComponent } from './list-player/list-player';
import { ListClubComponent } from './list-club/list-club';
import { MenuHoziComponent } from './menu-hozi/menu-hozi';
import { SearchTopComponent } from './search-top/search-top';
import { FormSelectComponent } from './form-select/form-select';
import { CalendarComponent } from './calendar/calendar';
import { FormCalendarComponent } from './form-calendar/form-calendar';
@NgModule({
	declarations: [
		CalendarComponent,
		FormSelectComponent,
		FormInputComponent,
		ListPlayerComponent,
		MenuHoziComponent,
		ListClubComponent,
    SearchTopComponent,
    FormCalendarComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		CalendarComponent,
		FormSelectComponent,
		FormInputComponent,
		ListPlayerComponent,
		ListClubComponent,
		MenuHoziComponent,
    SearchTopComponent,
    FormCalendarComponent
	]
})
export class ComponentsModule { }
