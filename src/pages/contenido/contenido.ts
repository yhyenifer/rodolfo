import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {
	MediaCapture,
	MediaFile,
	CaptureError,
	CaptureImageOptions,
	CaptureVideoOptions
} from '@ionic-native/media-capture';

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
	multimedia: any;
	base64Image: string;
	contenido: any[];
	editar: boolean;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		private camera: Camera,
		private mediaCapture: MediaCapture
	) {
		this.identificador = this.navParams.get('param');
		this.contenido = this.navParams.get('contenido');
		if (this.contenido == undefined) {
			this.editar = false;
		}
		if (this.contenido != undefined) {
			this.editar = true;
		}

		if (this.identificador == 1) {
			this.margen_arriba = 'margen_arriba';
		} else {
			this.margen_arriba = '';
		}
	}

	ionViewDidLoad() {}

	agregarNuevoContenido() {
		// this.identificador 1 si es comentario p 0 si es multimedia solo
		if (this.editar) {
			console.log('esto es edicion');
			if (this.identificador == 0) {
				console.log('guardar contenido');
			}
			if (this.identificador == 1) {
				console.log('guardar comentario');
			}
		} else {
			console.log('esto es adicion');
			if (this.identificador == 0) {
				console.log('guardar contenido');
			}
			if (this.identificador == 1) {
				console.log('guardar comentario');
			}
		}

		this.viewCtrl.dismiss();
	}
	ngOnInit(): void {
		this.multimedia = [];
	}
	abrirGaleria() {
		const optionsGaleria: CameraOptions = {
			quality: 25,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.ALLMEDIA,
			sourceType: 0
		};
		this.camera.getPicture(optionsGaleria).then(
			(imageData) => {
				console.log(imageData);
				this.base64Image = 'data:image/jpeg;base64,' + imageData;
				this.multimedia.push(this.base64Image);
				this.multimedia.reverse;
			},
			(err) => {
				// Handle error
			}
		);
	}

	abrirCamara() {
		// const options: CameraOptions = {
		// 	quality: 25,
		// 	destinationType: this.camera.DestinationType.DATA_URL,
		// 	encodingType: this.camera.EncodingType.JPEG,
		// 	mediaType: this.camera.MediaType.PICTURE,

		// 	sourceType: 1
		// };

		// this.camera.getPicture(options).then(
		// 	(imageData) => {
		// 		this.base64Image = 'data:image/jpeg;base64,' + imageData;
		// 		this.multimedia.push(this.base64Image);
		// 		this.multimedia.reverse;
		// 	},
		// 	(err) => {
		// 		// Handle error
		// 	}
		// );
		let optionsVideo: CaptureVideoOptions = { limit: 1 };
		let options: CaptureImageOptions = { limit: 1 };
		this.mediaCapture
			.captureImage(options)
			.then(
				(data: MediaFile[]) => console.log(data),
				(err: CaptureError) => console.error(err)
			);
	}

	abrirCamaraVideo() {
		let options: CaptureVideoOptions = { limit: 1 };
		this.mediaCapture
			.captureVideo(options)
			.then(
				(data: MediaFile[]) => console.log(data),
				(err: CaptureError) => console.error(err)
			);
	}

	eliminarFoto(index) {
		this.multimedia.splice(index, 1);
	}
}
