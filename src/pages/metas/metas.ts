import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
	chats: any[];
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.chats = [
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
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MetasPage');
	}

	cumplir(meta) {
		console.log('cumplir meta');
		console.log(meta);
	}
	incumplir(meta) {
		console.log('incumplir meta');
		console.log(meta);
	}
}
