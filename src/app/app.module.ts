import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTravelsPage } from '../pages/my-travels/my-travels';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { SingInPageModule } from '../pages/sing-in/sing-in.module';
import { MyTravelsPageModule } from '../pages/my-travels/my-travels.module';
import { NewTravelPageModule } from '../pages/new-travel/new-travel.module';
import { DetailTravelPageModule } from '../pages/detail-travel/detail-travel.module';

import { IonicStorageModule } from '@ionic/storage';
import { MetasPageModule } from '../pages/metas/metas.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { ContenidoPageModule } from '../pages/contenido/contenido.module';
import { FinalizarViajePageModule } from '../pages/finalizar-viaje/finalizar-viaje.module';

import { Camera } from '@ionic-native/camera';
import { ComentarioContenidoPageModule } from '../pages/comentario-contenido/comentario-contenido.module';
export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import {
	MediaCapture,
	MediaFile,
	CaptureError,
	CaptureImageOptions
} from '@ionic-native/media-capture';
import { EtiquetadosPageModule } from '../pages/etiquetados/etiquetados.module';
import { TravelsPageModule } from '../pages/travels/travels.module';

@NgModule({
	declarations: [ MyApp, AboutPage, ContactPage, HomePage, TabsPage, MyTravelsPage, LoginPage ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [ HttpClient ]
			}
		}),
		SingInPageModule,
		NewTravelPageModule,
		DetailTravelPageModule,
		MetasPageModule,
		ContenidoPageModule,
		IonicStorageModule.forRoot(),
		NotificationPageModule,
		FinalizarViajePageModule,
		ComentarioContenidoPageModule,
		EtiquetadosPageModule,
		TravelsPageModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
		AboutPage,
		ContactPage,
		HomePage,
		TabsPage,
		MyTravelsPage,
		LoginPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Camera,
		MediaCapture
	]
})
export class AppModule {}
