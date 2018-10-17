import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { MyTravelsPage } from '../my-travels/my-travels';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { SingInPage } from '../sing-in/sing-in';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	zoomEs: string;
	zoomEn: string;
	constructor(
		private storage: Storage,
		public navCtrl: NavController,
		public navParams: NavParams,
		private translateService: TranslateService,
		public modalCtrl: ModalController
	) {}

	ionViewDidLoad() {}

	//acceso mediante la cuenta de facebook
	facebookLogin() {
		this.storage.set('nombreUsuario', 'Yenifer');
		this.navCtrl.setRoot(TabsPage);
	}
	// acceso mediante la cuenta de google
	googleLogin() {
		this.storage.set('nombreUsuario', 'Yenifer');
		this.navCtrl.setRoot(TabsPage);
	}

	// permite seleccionar el idioma
	selectIdiom(idioma) {
		console.log('seleccion de idioma');
		console.log(idioma);
		if (idioma == 'es') {
			this.zoomEs = 'pulse';
			this.zoomEn = '';
		}
		if (idioma == 'en') {
			this.zoomEs = '';
			this.zoomEn = 'pulse';
		}

		this.translateService.use(idioma);
	}

	//acceso mediante cuenta propia de la aplicacion
	login() {
		this.storage.set('nombreUsuario', 'Yenifer');
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modalLogin'
		};
		let modalPage = this.modalCtrl.create(SingInPage, {}, myModalOptions);

		modalPage.present();
		//this.navCtrl.setRoot(SingInPage);
	}
	//acceso mediante cuenta propia de la aplicacion
	crearCuenta() {
		this.storage.set('nombreUsuario', 'Yenifer');
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modalCrear'
		};
		let modalPage = this.modalCtrl.create(CrearCuentaPage, {}, myModalOptions);

		modalPage.present();
		//this.navCtrl.setRoot(SingInPage);
	}
}
