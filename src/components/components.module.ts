import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';
import { MenuHoziComponent } from './menu-hozi/menu-hozi';
@NgModule({
	declarations: [
    FormInputComponent,
    MenuHoziComponent
	],
	imports: [
		IonicModule
	],
	exports: [
    FormInputComponent,
    MenuHoziComponent
	]
})
export class ComponentsModule { }
