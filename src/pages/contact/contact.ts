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
		this.url = 'assets/gif/gif1.gif';
		this.rootPage = ContactPage;
	}
	ionViewWillLeave() {
	
	}
}
