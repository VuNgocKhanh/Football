import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';
import { ListPlayerComponent } from './list-player/list-player';
import { ListClubComponent } from './list-club/list-club';
import { MenuHoziComponent } from './menu-hozi/menu-hozi';
@NgModule({
	declarations: [
		FormInputComponent,
		ListPlayerComponent,
		MenuHoziComponent,
		ListClubComponent
	],
	imports: [
		IonicModule
	],
	exports: [FormInputComponent,
		ListPlayerComponent,
		ListClubComponent,
		MenuHoziComponent
	]
})
export class ComponentsModule { }
