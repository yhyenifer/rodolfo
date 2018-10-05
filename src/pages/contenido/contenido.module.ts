import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContenidoPage } from './contenido';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ ContenidoPage ],
	imports: [ IonicPageModule.forChild(ContenidoPage), TranslateModule ]
})
export class ContenidoPageModule {}
