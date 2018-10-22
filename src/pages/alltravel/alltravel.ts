import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.seeSearch = this.navParams.get('verBuscar');
		this.viajes = this.navParams.get('viajes');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AlltravelPage');
	}
}
