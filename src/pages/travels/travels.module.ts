import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelsPage } from './travels';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ TravelsPage ],
	imports: [ IonicPageModule.forChild(TravelsPage), TranslateModule ]
})
export class TravelsPageModule {}
