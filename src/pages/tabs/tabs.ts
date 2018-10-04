import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyTravelsPage } from '../my-travels/my-travels';
import { NotificationPage } from '../notification/notification';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = ContactPage;
	tab2Root = MyTravelsPage;
	tab3Root = NotificationPage;
	tab4Root = ContactPage;
	tab5Root = ContactPage;
	

	constructor() {}
}
