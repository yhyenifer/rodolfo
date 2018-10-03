import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, ModalController } from 'ionic-angular';
import { MyTravelsPage } from '../my-travels/my-travels';
import { isRightSide } from 'ionic-angular/util/util';
import { MetasPage } from '../metas/metas';

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
	imagen: any;
	@ViewChild(Navbar) navBar: Navbar; // add this line
	nombreViaje: String;
	viaje: any = {};
	center: boolean;
	efecto = '';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		this.viaje = this.navParams.get('viaje');
		this.nombreViaje = this.viaje.nombre;
		this.center = false;

		if (this.imagen == undefined) {
			this.center = true;
			this.efecto = 'infinite';
			this.viaje.imagen = 'assets/imgs/admin/default.jpg';
		} else {
			this.efecto = '';
		}
	}
	// al dar click en el boton de agregar contenido este deja de pulsar
	agregar() {
		this.efecto = '';
	}

	agregarMeta() {
		console.log('agregar meta aqui');
		console.log(this.viaje);
		//this.navCtrl.setRoot(MetasPage);
		this.presentProfileModal();
	}
	presentProfileModal() {
		let profileModal = this.modalCtrl.create(MetasPage);
		profileModal.present();
	}
	ionViewDidLoad() {
		this.center = false;

		// evento del boton atras de la pagina, esta lo lleva directamente a mis viajes
		this.navBar.backButtonClick = (e: UIEvent) => {
			this.navCtrl.setRoot(MyTravelsPage, { nuevoViaje: this.viaje });
		};
	}
}
