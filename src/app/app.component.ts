import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = LoginPage;

	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
		private translateService: TranslateService
	) {
		// Idioma

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.translateService.setDefaultLang('es');
			this.translateService.use('es');
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
