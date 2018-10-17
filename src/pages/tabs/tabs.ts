import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyTravelsPage } from '../my-travels/my-travels';
import { NotificationPage } from '../notification/notification';
import { TravelsPage } from '../travels/travels';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = ContactPage;
	tab2Root = TravelsPage;
	tab3Root = NotificationPage;
	tab4Root = MyTravelsPage;
	tab5Root = ContactPage;

	constructor() {}
}
