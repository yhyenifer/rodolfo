import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';
import { NewTravelPage } from '../new-travel/new-travel';
import { DetailTravelPage } from '../detail-travel/detail-travel';

/**
 * Generated class for the MyTravelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-my-travels',
	templateUrl: 'my-travels.html'
})
export class MyTravelsPage {
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
		imagen: String;
		state: String;
		seeTools: Boolean;
	}>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private translateService: TranslateService
	) {
		this.seeSearch = false;
		this.noClick = false;
		this.viaje = this.navParams.get('nuevoViaje');
		// listado de viajes manual
		this.viajes = [];
		this.viajes = [
			{
				id: 1,
				nombre: 'Mi primer viaje',
				imagen: 'assets/imgs/misviajes/selfie1.jpeg',
				state: '1',
				seeTools: false
			},
			{
				id: 2,
				nombre: 'De paseo por el Quindío',
				imagen: 'assets/imgs/misviajes/selfie3.jpeg',
				state: '0',
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
		if (this.seeSearch) {
			this.seeSearch = false;
		} else {
			this.seeSearch = true;
		}
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
				this.navCtrl.push(DetailTravelPage, {
					viaje: viaje
				});
			}
		}
	}

	abrirNuevoViaje() {
		this.navCtrl.push(NewTravelPage);
	}
	ionViewDidLoad() {}
}
