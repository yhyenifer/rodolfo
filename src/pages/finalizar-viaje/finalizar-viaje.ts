import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FinalizarViajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-finalizar-viaje',
	templateUrl: 'finalizar-viaje.html'
})
export class FinalizarViajePage {
	satisfaccion: number;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {
		this.satisfaccion = 3;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FinalizarViajePage');
	}

	cerrarModal() {
		this.viewCtrl.dismiss();
	}

	finalizarViaje() {
		this.viewCtrl.dismiss();
	}
}
