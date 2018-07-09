import { NgModule } from '@angular/core';
import { SegmentComponent } from './segment/segment';
import { IonicModule } from 'ionic-angular';
import { FormInputComponent } from './form-input/form-input';

@NgModule({
	declarations: [SegmentComponent,
		FormInputComponent],
	imports: [
		IonicModule
	],
	exports: [SegmentComponent,
		FormInputComponent]
})
export class ComponentsModule { }
