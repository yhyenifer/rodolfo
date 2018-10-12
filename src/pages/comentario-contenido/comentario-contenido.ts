import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ComentarioContenidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-comentario-contenido',
	templateUrl: 'comentario-contenido.html'
})
export class ComentarioContenidoPage {
	editar: boolean;
	comentarioContenido: string;
	nuevoComentarioContenido: string;
	contenido: any = {};
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {
		this.contenido = this.navParams.get('contenido');
		this.editar = false;
		console.log(this.contenido);
		this.comentarioContenido = this.contenido.coment;
		console.log(this.comentarioContenido);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ComentarioContenidoPage');
	}

	editarComentario() {
		this.editar = true;
		this.nuevoComentarioContenido = this.comentarioContenido;
	}

	agregarComentario() {
		if (this.editar) {
			console.log('editar comentartio');
			this.comentarioContenido = this.nuevoComentarioContenido;
			this.nuevoComentarioContenido = '';
		} else {
			console.log('nuevo comentario');
			console.log(this.nuevoComentarioContenido);
			this.nuevoComentarioContenido = '';
		}
	}

	eliminarComentario() {
		this.contenido.coment = '';
		this.viewCtrl.dismiss();
	}
}
