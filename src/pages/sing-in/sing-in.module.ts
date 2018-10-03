import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingInPage } from './sing-in';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ SingInPage ],
	imports: [ IonicPageModule.forChild(SingInPage), TranslateModule ]
})
export class SingInPageModule {}
