import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTravelPage } from './detail-travel';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ DetailTravelPage ],
	imports: [ IonicPageModule.forChild(DetailTravelPage), TranslateModule ]
})
export class DetailTravelPageModule {}
