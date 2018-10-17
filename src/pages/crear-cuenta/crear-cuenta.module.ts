import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearCuentaPage } from './crear-cuenta';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ CrearCuentaPage ],
	imports: [ IonicPageModule.forChild(CrearCuentaPage), TranslateModule ]
})
export class CrearCuentaPageModule {}
