import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtiquetadosPage } from './etiquetados';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ EtiquetadosPage ],
	imports: [ IonicPageModule.forChild(EtiquetadosPage), TranslateModule ]
})
export class EtiquetadosPageModule {}
