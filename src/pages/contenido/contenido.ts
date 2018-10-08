import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-contenido',
	templateUrl: 'contenido.html'
})
export class ContenidoPage {
	margen_arriba: string;
	identificador: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {
		this.identificador = this.navParams.get('param');
		if(this.identificador == 1){
			this.margen_arriba = "margen_arriba";
		}else{
			this.margen_arriba = "";
		}
	}

	ionViewDidLoad() {}

	agregarNuevoContenido() {
		// this.identificador 1 si es comentario p 0 si es multimedia solo
		if (this.identificador == 0) {
			console.log('guardar contenido');
		}
		if (this.identificador == 1) {
			console.log('guardar comentario');
		}
		this.viewCtrl.dismiss();
	}

	abrirGaleria() {}

	abrirCamara() {}
}
