import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlltravelPage } from './alltravel';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ AlltravelPage ],
	imports: [ IonicPageModule.forChild(AlltravelPage), TranslateModule ]
})
export class AlltravelPageModule {}
