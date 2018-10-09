import { Component, ViewChild } from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	Navbar,
	ModalController,
	ModalOptions
} from 'ionic-angular';
import { MyTravelsPage } from '../my-travels/my-travels';
import { isRightSide } from 'ionic-angular/util/util';
import { MetasPage } from '../metas/metas';
import { ContenidoPage } from '../contenido/contenido';
import { FinalizarViajePage } from '../finalizar-viaje/finalizar-viaje';

/**
 * Generated class for the DetailTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-travel',
	templateUrl: 'detail-travel.html'
})
export class DetailTravelPage {
	contenido: {
		id: number;
		viaje: number;
		imagen: string;
		coment: string;
		state: number;
		seeTools: boolean;
		dia: number;
		fecha: string;
	}[];
	imagen: any;
	noClick: boolean;
	seeSearch: boolean;
	@ViewChild(Navbar) navBar: Navbar; // add this line
	nombreViaje: String;
	viaje: any = {};
	efecto = '';
	efectoTool = '';
	verLinea = '';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		this.noClick = false;
		this.seeSearch = false;
		this.viaje = this.navParams.get('viaje');
		this.nombreViaje = this.viaje.nombre;
		this.contenido = [];
		if (this.viaje.id == '1') {
			this.contenido = [
				{
					id: 1,
					viaje: 1,
					imagen: 'assets/imgs/misviajes/selfie4.jpeg',
					coment: 'mi viaje',
					state: 1,
					seeTools: false,
					dia: 1,
					fecha: 'Oct. 1, 2018'
				}
			];
		}
		if (this.viaje.id == '2') {
			this.contenido = [
				{
					id: 1,
					viaje: 2,
					imagen: 'assets/imgs/misviajes/selfie2.jpeg',
					coment: 'Quindío lleno de cosas lindas',
					state: 1,
					seeTools: false,
					dia: 1,
					fecha: 'Sept. 13, 2018'
				},
				{
					id: 2,
					viaje: 2,
					imagen: 'assets/imgs/misviajes/selfie5.jpeg',
					coment: '¡Sorprendente!',
					state: 1,
					seeTools: false,
					dia: 2,
					fecha: 'Sept. 14, 2018'
				},
				{
					id: 3,
					viaje: 2,
					imagen: 'assets/imgs/misviajes/selfie6.jpeg',
					coment: '¡Sorprendente!',
					state: 1,
					seeTools: false,
					dia: 3,
					fecha: 'Sept. 15, 2018'
				},
				{
					id: 4,
					viaje: 2,
					imagen: 'assets/imgs/misviajes/selfie7.jpeg',
					coment: '¡Sorprendente!',
					state: 1,
					seeTools: false,
					dia: 4,
					fecha: 'Sept. 16, 2018'
				}
			];
		}

		if (this.contenido.length == 0) {
			this.efecto = 'infinite';
			this.viaje.imagen = 'assets/imgs/admin/default.jpg';
		} else {
			this.efecto = '';
			this.verLinea = 'display_no';
			if (this.contenido.length > 1) {
				this.verLinea = 'display_si';
			}
		}
	}
	// al dar click en el boton de agregar contenido este deja de pulsar
	agregar() {
		this.efecto = '';
	}
	// abre la modal que permite agregar metas
	agregarMeta() {
		this.presentMetaModal();
	}
	// crea la modal de las metas y le asigna una clase en particular
	presentMetaModal() {
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modalmetas'
		};
		let profileModal = this.modalCtrl.create(MetasPage, {}, myModalOptions);
		profileModal.present();
	}
	// abre la modal del contenido de acuerdo al param, si es comentario o multimedia
	agregarContenido(param) {
		this.presentContenidoModal(param);
	}
	// crea la modal de contenido de acuerdo al param, si es comenetario o multimedia
	presentContenidoModal(param) {
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modalcontenido'
		};
		let profileModal = this.modalCtrl.create(ContenidoPage, { param: param }, myModalOptions);
		profileModal.present();
	}

	ionViewDidLoad() {
		// evento del boton atras de la pagina, esta lo lleva directamente a mis viajes
		this.navBar.backButtonClick = (e: UIEvent) => {
			this.navCtrl.setRoot(MyTravelsPage, { nuevoViaje: this.viaje });
		};
	}
	presionado(contenido) {
		this.efectoTool = 'fadeInLeft';
		this.noClick = true; // no permite abrir el detalle
		contenido.seeTools = true; // muestra las herramientas
		setTimeout(() => {
			this.noClick = false; // espera un tiempo para habilitar el click
		}, 1000);
	}
	// muestra la barra de herramientas
	showBarrTools(contenido) {
		console.log(contenido);
		if (contenido.seeTools) {
			this.efectoTool = 'fadeOutLeft';
			setTimeout(() => {
				contenido.seeTools = false;
			}, 500);
		} else {
			this.efectoTool = 'fadeInLeft';
			contenido.seeTools = true;
		}
	}
	//oculta la barra de herramientas por contenido
	cerrarTools(contenido) {
		if (!this.noClick) {
			console.log('click');
			if (contenido.seeTools) {
				this.efectoTool = 'fadeOutLeft';
				setTimeout(() => {
					contenido.seeTools = false; // En caso que este abierta las herramientas, el click las cierra
				}, 500);
			}
		}
	}
		// abre la modal que permite finalizar un viaje 
		finalizarViaje() {
			this.presentFinalizarViajeModal();
		}
		// crea la modal de finalizar un viaje 
		presentFinalizarViajeModal() {
			const myModalOptions: ModalOptions = {
				enableBackdropDismiss: true,
				cssClass: 'modalfinalizarviaje'
			};
			let profileModal = this.modalCtrl.create(FinalizarViajePage, {}, myModalOptions);
			profileModal.present();
		}
}
