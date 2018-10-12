import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioContenidoPage } from './comentario-contenido';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ ComentarioContenidoPage ],
	imports: [ IonicPageModule.forChild(ComentarioContenidoPage), TranslateModule ]
})
export class ComentarioContenidoPageModule {}
