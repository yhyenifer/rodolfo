import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { MyTravelsPage } from './my-travels';

@NgModule({
	declarations: [ MyTravelsPage ],
	imports: [ IonicPageModule.forChild(MyTravelsPage), TranslateModule ]
})
export class MyTravelsPageModule {}
