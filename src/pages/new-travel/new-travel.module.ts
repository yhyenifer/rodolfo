import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTravelPage } from './new-travel';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ NewTravelPage ],
	imports: [ IonicPageModule.forChild(NewTravelPage), TranslateModule ]
})
export class NewTravelPageModule {}
