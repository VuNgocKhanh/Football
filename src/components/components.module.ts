import { NgModule } from '@angular/core';
import { SegmentComponent } from './segment/segment';
import { IonicPageModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';
import { ListPlayerComponent } from './list-player/list-player';

@NgModule({
	declarations: [
		SegmentComponent,
		FormInputComponent,
    ListPlayerComponent
	],
	imports: [
		IonicPageModule
	],
	exports: [
		SegmentComponent,
		FormInputComponent,
    ListPlayerComponent
	]
})
export class ComponentsModule { }
