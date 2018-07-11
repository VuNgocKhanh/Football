import { NgModule } from '@angular/core';
import { SegmentComponent } from './segment/segment';
import { IonicPageModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';

@NgModule({
	declarations: [
		SegmentComponent,
		FormInputComponent
	],
	imports: [
		IonicPageModule
	],
	exports: [
		SegmentComponent,
		FormInputComponent
	]
})
export class ComponentsModule { }
