import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetasPage } from './metas';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ MetasPage ],
	imports: [ IonicPageModule.forChild(MetasPage), TranslateModule ]
})
export class MetasPageModule {}
