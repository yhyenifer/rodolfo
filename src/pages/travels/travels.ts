import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';
import { NewTravelPage } from '../new-travel/new-travel';
import { DetailTravelPage } from '../detail-travel/detail-travel';
import { AlltravelPage } from '../alltravel/alltravel';
import { ComentarioContenidoPage } from '../comentario-contenido/comentario-contenido';
import { EtiquetadosPage } from '../etiquetados/etiquetados';
/**
 * Generated class for the TravelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-travels',
	templateUrl: 'travels.html'
})
export class TravelsPage {
	@ViewChild('input') buscar;
	viaje: any;
	tab1Root = '';
	tab2Root = '';
	efecto = 'fadeInLeft';

	seeSearch: boolean;
	noClick: boolean;

	viajes: Array<{
		id: number;
		nombre: String;
		ubicacion: String;
		usuario: String;
		imagen: String;
		state: String;
		seguir: String;
		avatar: String;
		fecha: String;
		fechaFinViaje: String;
		seeTools: Boolean;
	}>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private translateService: TranslateService,
		public modalCtrl: ModalController
	) {
		this.seeSearch = false;
		this.noClick = false;
		this.viaje = this.navParams.get('nuevoViaje');
		// listado de viajes manual
		this.viajes = [];
		this.viajes = [
			{
				id: 1,
				nombre: 'Viajando en familia',
				ubicacion: 'Japon',
				usuario: 'Jorge',
				imagen: 'assets/imgs/misviajes/otrosviajes1.jpeg',
				state: '0',
				seguir: '0',
				avatar: 'assets/imgs/avatar/5.jpg',
				fecha: '2018-10-01',
				fechaFinViaje: '2018-10-12',
				seeTools: false
			},
			{
				id: 2,
				nombre: 'viajando',
				ubicacion: 'Colombia',
				usuario: 'Vivi',
				imagen: 'assets/imgs/misviajes/otrosviajes4.jpeg',
				state: '1',
				seguir: '1',
				avatar: 'assets/imgs/avatar/6.jpg',
				fecha: '2018-10-01',
				fechaFinViaje: '',
				seeTools: false
			},
			{
				id: 3,
				nombre: 'contigo',
				ubicacion: 'Colombia',
				usuario: 'Gio',
				imagen: 'assets/imgs/misviajes/otrosviajes2.jpeg',
				state: '1',
				seguir: '0',
				avatar: 'assets/imgs/avatar/3.jpg',
				fecha: '2018-10-30',
				fechaFinViaje: '',
				seeTools: false
			},
			{
				id: 4,
				nombre: 'De rumbo a casa',
				ubicacion: 'Africa',
				usuario: 'Vane',
				imagen: 'assets/imgs/misviajes/otrosviajes3.jpeg',
				state: '0',
				seguir: '0',
				avatar: 'assets/imgs/avatar/4.jpg',
				fecha: '2018-09-10',
				fechaFinViaje: '2018-10-11',
				seeTools: false
			}
		];
		// almacena dentro del arreglo el viaje creado
		// esto es mientras se implementa la persistencia
		console.log(this.viaje);
		if (this.viaje != undefined) {
			this.viajes.push(this.viaje);
		}
	}

	// muestra la barra de busqueda
	showSearch() {
		this.seeSearch = true;
		this.navCtrl.push(AlltravelPage, { verBuscar: this.seeSearch, viajes: this.viajes });
		// if (this.seeSearch) {
		// 	this.seeSearch = false;
		// } else {
		// 	this.seeSearch = true;
		// }
	}

	// muestra la barra de herramientas
	showBarrTools(viaje) {
		if (viaje.seeTools) {
			this.efecto = 'fadeOutLeft';
			setTimeout(() => {
				viaje.seeTools = false;
			}, 500);
		} else {
			this.efecto = 'fadeInLeft';
			viaje.seeTools = true;
		}
	}

	presionado(viaje) {
		this.efecto = 'fadeInLeft';
		this.noClick = true; // no permite abrir el detalle
		viaje.seeTools = true; // muestra las herramientas
		setTimeout(() => {
			this.noClick = false; // espera un tiempo para habilitar el click
		}, 1000);
	}
	seleccionViaje(viaje) {
		if (!this.noClick) {
			console.log('click');
			if (viaje.seeTools) {
				this.efecto = 'fadeOutLeft';
				setTimeout(() => {
					viaje.seeTools = false; // En caso que este abierta las herramientas, el click las cierra
				}, 500);
			} else {
				// en caso que no este abierta las herramientas, abre la pantalla de detalle del viaje
				// identificador, determina por donde se abre el detalle del viaje, 0 otros viajes 1, mis viajes
				this.navCtrl.push(DetailTravelPage, {
					viaje: viaje,
					identificador: 0
				});
			}
		}
	}

	abrirNuevoViaje() {
		this.navCtrl.push(NewTravelPage);
	}
	ionViewDidLoad() {}

	seguir(viaje) {
		viaje.seguir = '1';
	}

	dejarDeSeguir(viaje) {
		viaje.seguir = '0';
	}

	// abre la modal que permite ver y agraegar comentario de un cotenido
	comentarioContenido(viaje) {
		this.presentComentarioContenidoModal(viaje);
	}
	// crea la modal de ver y agregar comentario de un cotenido
	presentComentarioContenidoModal(viaje) {
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modalcomentario'
		};
		let profileModal = this.modalCtrl.create(
			ComentarioContenidoPage,
			{ contenido: viaje },
			myModalOptions
		);
		profileModal.present();
	}

	// abre la modal que permite ver y agraegar etiquetados
	etiquetados(viaje) {
		this.presentEtiquetadosModal(viaje);
	}
	// crea la modal de ver y agregar etiquetados
	presentEtiquetadosModal(viaje) {
		const myModalOptions: ModalOptions = {
			enableBackdropDismiss: true,
			cssClass: 'modaletiquetados'
		};
		let profileModal = this.modalCtrl.create(
			EtiquetadosPage,
			{ contenido: viaje },
			myModalOptions
		);
		profileModal.present();
	}
}
