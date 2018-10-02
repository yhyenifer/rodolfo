import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {
	url: any;
	rootPage: any;

	constructor(public navCtrl: NavController) {}

	ionViewWillEnter() {
		console.log('ingresa');
		this.url = 'assets/gif/gif1.gif';
		this.rootPage = ContactPage;
	}
	ionViewWillLeave() {
		console.log('sale');

		this.url = '';
		console.log(this.url);
	}
}
