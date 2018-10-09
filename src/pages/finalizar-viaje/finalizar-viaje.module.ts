import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizarViajePage } from './finalizar-viaje';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FinalizarViajePage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizarViajePage),TranslateModule
  ],
})
export class FinalizarViajePageModule {}
