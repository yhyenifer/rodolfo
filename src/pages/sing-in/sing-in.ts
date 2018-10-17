import { Component } from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	ViewController,
	AlertController
} from 'ionic-angular';
import { Pipe, PipeTransform } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

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
	msjCampReqaContrasena: any;
	campTituloCorreo: any;
	msjCampReqa: any;
	la: any;
	nombreUsuario: any;
	msjCampReq: any;
	campTitulo: any;
	el: any;
	btnAceptar: any;
	contrasena: any;
	correo: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		private translateService: TranslateService,
		private storage: Storage,
		private alertCtrl: AlertController,
		private translate: TranslateService
	) {
		storage.get('nombreUsuario').then((val) => {
			this.nombreUsuario = val;
		});
		this.cargarNombreCampos();
	}

	ionViewDidLoad() {}

	public closeModal() {
		this.viewCtrl.dismiss();
	}

	iniciarSesion() {
		console.log('iniciar sesion');
		console.log(this.correo);
		console.log(this.contrasena);
		if (this.correo == undefined) {
			this.presentAlert(this.el, this.campTituloCorreo, this.msjCampReq, this.btnAceptar);
			return;
		}
		if (this.contrasena == undefined) {
			this.presentAlert(
				this.la,
				this.msjCampReqaContrasena,
				this.msjCampReqa,
				this.btnAceptar
			);
			return;
		}
		this.storage.set('nombreUsuario', 'Yenifer');
		this.navCtrl.setRoot(TabsPage);
	}

	// alertas de solo un boton, estas son obligatorias
	presentAlert(inicio, campo, mensaje, boton) {
		let alert = this.alertCtrl.create({
			title: this.nombreUsuario,
			subTitle: inicio + ' ' + campo + ' ' + mensaje,
			buttons: [ boton ]
		});
		alert.present();
	}

	// carga el nombre de los campos de acuerdo al idioma seleccionado, que hay en pantalla, los mensajes y nombres de botones que se requieren.
	cargarNombreCampos() {
		this.translate.get('EL').subscribe((res) => {
			this.el = res;
		});
		this.translate.get('LA').subscribe((res) => {
			this.la = res;
		});
		this.translate.get('MENSAJEREQUERIDOCAMP').subscribe((res) => {
			this.msjCampReq = res;
		});

		this.translate.get('ACEPTAR').subscribe((res) => {
			this.btnAceptar = res;
		});

		this.translate.get('MENSAJEREQUERIDACAMP').subscribe((res) => {
			this.msjCampReqa = res;
		});
		this.translate.get('CORREO').subscribe((res) => {
			this.campTituloCorreo = res;
		});
		this.translate.get('CONTRASENA').subscribe((res) => {
			this.msjCampReqaContrasena = res;
		});
	}
}
