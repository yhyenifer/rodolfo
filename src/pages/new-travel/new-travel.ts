import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DetailTravelPage } from '../detail-travel/detail-travel';
import { TranslateModule } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-new-travel',
	templateUrl: 'new-travel.html'
})
export class NewTravelPage {
	mensajeExito(arg0: any, arg1: any): any {
		throw new Error('Method not implemented.');
	}
	nuevoViaje: {
		id: number;
		nombre: string;
		tipo: any;
		placer: any;
		negocio: any;
		fecha: any;
		comentario: any;
		destino: {};
		acompañantes: {};
		state: string;
	};
	mensaje: any;
	estado: any;
	comentarioViaje: any;
	negocio: any;
	placer: any;
	la: any;
	msjCampReqa: any;
	campDate(arg0: any, arg1: any, arg2: any, arg3: any): any {
		throw new Error('Method not implemented.');
	}
	dateTrip: any;
	btnAceptar: string;
	el: string;
	campTitulo: string;
	msjCampReq: string;
	nombreApp: string;
	nombreUsuario: string;
	tipo: any;
	titleTrip: string;
	commentTrip: string;

	constructor(
		private storage: Storage,
		public navCtrl: NavController,
		public navParams: NavParams,
		private alertCtrl: AlertController,
		private translate: TranslateService
	) {
		storage.get('nombreUsuario').then((val) => {
			this.nombreUsuario = val;
		});

		this.cargarNombreCampos();
		this.tipo = 1; // publico
	}

	crearNuevoViaje() {
		//valida el titulo del ciaje
		if (this.titleTrip == undefined) {
			this.presentAlert(this.el, this.campTitulo, this.msjCampReq, this.btnAceptar);
			return;
		}
		// valida que la fecha sea requerida ---Pendiente preguntar se esta debe ser requerida
		// if (this.dateTrip == undefined) {
		// 	this.presentAlert(this.la, this.campDate, this.msjCampReqa, this.btnAceptar);
		// 	return;
		// }
		this.nuevoViaje = {
			id: 3,
			nombre: this.titleTrip,
			tipo: this.tipo,
			placer: this.placer,
			negocio: this.negocio,
			fecha: this.dateTrip,
			comentario: this.comentarioViaje,
			destino: {},
			acompañantes: {},
			state: '0'
		};

		this.presentAlerCreation(this.mensajeExito, this.btnAceptar);
	}

	ionViewDidLoad() {}

	// alertas de solo un boton, estas son obligatorias
	presentAlert(inicio, campo, mensaje, boton) {
		let alert = this.alertCtrl.create({
			title: this.nombreUsuario,
			subTitle: inicio + ' ' + campo + ' ' + mensaje,
			buttons: [ boton ]
		});
		alert.present();
	}
	// alerta de creacion con exito
	presentAlerCreation(mensaje, boton) {
		let alert = this.alertCtrl.create({
			title: this.nombreUsuario,
			message: mensaje,
			buttons: [
				{
					text: boton,
					handler: () => {
						this.navCtrl.push(DetailTravelPage, { viaje: this.nuevoViaje });
					}
				}
			]
		});
		alert.present();
	}

	// carga el nombre de los campos de acuerdo al idioma seleccionado, que hay en pantalla, los mensajes y nombres de botones que se requieren.
	cargarNombreCampos() {
		this.translate.get('NOMBREAPP').subscribe((res) => {
			this.nombreApp = res;
		});
		this.translate.get('EL').subscribe((res) => {
			this.el = res;
		});
		this.translate.get('LA').subscribe((res) => {
			this.la = res;
		});
		this.translate.get('MENSAJEREQUERIDOCAMP').subscribe((res) => {
			this.msjCampReq = res;
		});
		this.translate.get('MENSAJECREACIONEXITO').subscribe((res) => {
			this.mensajeExito = res;
		});

		this.translate.get('TITULOVIAJE').subscribe((res) => {
			this.campTitulo = res;
		});
		this.translate.get('ACEPTAR').subscribe((res) => {
			this.btnAceptar = res;
		});
		this.translate.get('FECHA').subscribe((res) => {
			this.campDate = res;
		});
		this.translate.get('MENSAJEREQUERIDACAMP').subscribe((res) => {
			this.msjCampReqa = res;
		});
	}
}
