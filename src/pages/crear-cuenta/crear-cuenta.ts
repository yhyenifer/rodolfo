import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CrearCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-crear-cuenta',
	templateUrl: 'crear-cuenta.html'
})
export class CrearCuentaPage {
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CrearCuentaPage');
	}
	public closeModal() {
		this.viewCtrl.dismiss();
	}
}
