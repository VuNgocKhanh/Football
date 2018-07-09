import { NgModule } from '@angular/core';
import { SegmentComponent } from './segment/segment';
import { IonicModule } from '../../node_modules/ionic-angular/umd';
@NgModule({
	declarations: [SegmentComponent],
	imports: [
		IonicModule
	],
	exports: [SegmentComponent]
})
export class ComponentsModule {}
