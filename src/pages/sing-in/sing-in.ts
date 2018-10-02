import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SingInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-sing-in',
	templateUrl: 'sing-in.html'
})
export class SingInPage {
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		private translateService: TranslateService,
		private storage: Storage
	) {}

	ionViewDidLoad() {}

	public closeModal() {
		this.viewCtrl.dismiss();
	}

	iniciarSesion() {
		this.storage.set('nombreUsuario', 'Yenifer');
	}
}
