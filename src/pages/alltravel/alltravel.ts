import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions, ModalController } from 'ionic-angular';
import { DetailTravelPage } from '../detail-travel/detail-travel';
import { ComentarioContenidoPage } from '../comentario-contenido/comentario-contenido';

/**
 * Generated class for the AlltravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-alltravel',
	templateUrl: 'alltravel.html'
})
export class AlltravelPage {
	viajes: any;
	seeSearch: any;
	items: Array<string>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		this.seeSearch = this.navParams.get('verBuscar');
		this.viajes = this.navParams.get('viajes');
	}

	ngOnInit() {
		this.viajes = this.navParams.get('viajes');
	}
	filterItems(ev: any) {
		this.ngOnInit();
		let val = ev.target.value;
		if (val && val.trim() !== '') {
			this.viajes = this.viajes.filter(function(item) {
				return (
					item.usuario.toLowerCase().includes(val.toLowerCase()) ||
					item.ubicacion.toLowerCase().includes(val.toLowerCase())
				);
			});
		}
	}
	seguir(viaje) {
		viaje.seguir = '1';
	}

	dejarDeSeguir(viaje) {
		viaje.seguir = '0';
	}
	seleccionViaje(viaje) {
		// en caso que no este abierta las herramientas, abre la pantalla de detalle del viaje
		// identificador, determina por donde se abre el detalle del viaje, 0 otros viajes 1, mis viajes
		this.navCtrl.push(DetailTravelPage, {
			viaje: viaje,
			identificador: 0
		});
	}

	ionViewDidLoad() {}
}
