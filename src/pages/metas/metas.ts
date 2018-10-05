import { Component } from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	ItemSliding,
	AlertController,
	ToastController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the MetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-metas',
	templateUrl: 'metas.html'
})
export class MetasPage {
	metavacia: any;
	idx: number;
	percent: any;
	totalMetasCumplidas: number = 0;
	totalMetas: number;
	tituloRazonIncumplir: any;
	mensajeIncumplir: any;
	btnAceptar: any;
	meta: { name: string; state: number };
	metas: any[];
	name: string;
	nombreUsuario: string;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		private storage: Storage,
		private translate: TranslateService,
		private toastCtrl: ToastController
	) {
		storage.get('nombreUsuario').then((val) => {
			this.nombreUsuario = val;
		});
		this.idx = 0;
		this.cargarNombreCampos();
		//los estados significan 0 - pendiente, 1 - cumplido , 2 - incumplido
		this.metas = [
			{
				name: 'Conocer el templo de Zeus',
				state: '0'
			},
			{
				name: 'Conocer el teatro Dionisio',
				state: '1'
			},
			{
				name: 'Kolonaki',
				state: '2'
			},
			{
				name: 'Zappeion',
				state: '1'
			}
		];
		this.contarMetasCumplidas();
	}

	contarMetasCumplidas() {
		this.totalMetasCumplidas = 0;
		this.totalMetas = this.metas.length;
		for (let index = 0; index < this.totalMetas; index++) {
			if (this.metas[index].state == '1') {
				this.totalMetasCumplidas++;
			}
		}
	}

	ionViewDidLoad() {}

	// identifica la direccion del deslizamiento, ya sea cumpli o incumplir la meta y ejecuta las acciones
	logDrag(e, meta, slidingItem: ItemSliding) {
		this.percent = e._openAmount;

		if (this.percent < -110) {
			this.idx++;
			console.log(this.idx);
			if (this.idx == 1) {
				// se debe deslizar completo
				slidingItem.close();
				this.contarMetasCumplidas();
				this.presentAlerIncumplir(
					this.mensajeIncumplir,
					this.btnAceptar,
					meta,
					slidingItem
				);
			}
		}
		if (this.percent > 110) {
			// se debe deslizar completo
			meta.state = 1;
			this.contarMetasCumplidas();
			slidingItem.close();
		}
	}
	// agregar meta
	agregarMeta() {
		if (this.name != '' && this.name != undefined) {
			this.meta = {
				name: this.name,
				state: 0
			};
			this.metas.push(this.meta);
			this.contarMetasCumplidas();
			this.name = '';
		} else {
			this.presentToast();
		}
	}

	// alerta de creacion con exito
	presentAlerIncumplir(mensaje, boton, meta, slidingItem) {
		let alert = this.alertCtrl.create({
			inputs: [
				{
					name: 'incumplir',
					placeholder: mensaje,
					id: 'inptIncumplir'
				}
			],
			buttons: [
				{
					text: boton,
					handler: (data) => {
						console.log(data.incumplir);
						if (
							data.incumplir != '' &&
							data.incumplir != undefined &&
							data.incumplir != ' '
						) {
							meta.state = 2;
							meta.razonIncumplir = data.incumplir;
						}
						slidingItem.close();
						this.idx = 0;
					}
				}
			]
		});
		alert.present();
	}

	verRazon(meta) {
		console.log('ver razon');
		console.log(meta);
		let alert = this.alertCtrl.create({
			title: this.tituloRazonIncumplir,
			message: meta.razonIncumplir,
			buttons: [
				{
					text: this.btnAceptar,
					handler: (data) => {}
				}
			]
		});
		alert.present();
	}

	// carga el nombre de los campos de acuerdo al idioma seleccionado, que hay en pantalla, los mensajes y nombres de botones que se requieren.
	cargarNombreCampos() {
		this.translate.get('ACEPTAR').subscribe((res) => {
			this.btnAceptar = res;
		});
		this.translate.get('MENSAJEINCUMPLIRMETA').subscribe((res) => {
			this.mensajeIncumplir = res;
		});
		this.translate.get('TITULOINCUMPLIRMETA').subscribe((res) => {
			this.tituloRazonIncumplir = res;
		});
		this.translate.get('METAVACIA').subscribe((res) => {
			this.metavacia = res;
		});
	}

	presentToast() {
		let toast = this.toastCtrl.create({
			message: this.metavacia,
			duration: 3000,
			position: 'top'
		});
		toast.onDidDismiss(() => {});

		toast.present();
	}
}
