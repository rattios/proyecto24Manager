import { Component } from "@angular/core/";
import { NavController, LoadingController, Loading } from "ionic-angular";
import { HttpClient } from '@angular/common/http';
import { StorageProvider } from '../../providers/storage/storage';
import { CalificacionDetailPage } from '../calificacion-detail/calificacion-detail';

@Component({
  selector: 'page-calificacion',
  templateUrl: 'calificacion.html',
})
export class CalificacionPage {
	calications: any[];
	history: any[];
	calification: string = 'order';
	rating: any;
	loading: Loading;
	
	constructor(public navCtrl: NavController, public http: HttpClient, public storage: StorageProvider, private loadingCtrl: LoadingController) { 
		this.initCalifications();		
	}

	calificar(item){
		this.navCtrl.push(CalificacionDetailPage, {service: item});
	}

	showLoading() {
	    this.loading = this.loadingCtrl.create({
	      content: 'Cargando...'
	    });
	    this.loading.present();
	}

	initCalifications(){
		this.showLoading();
		let id = this.storage.get('userManappger');
		this.http.get('http://manappger.internow.com.mx/api/public/usuarios/'+id+'/pedidos')
		.toPromise()
		.then(
			data => {
				this.rating = data;
				this.calications = this.rating.usuario.pedidos;
				this.history =  this.rating.usuario.pedidos;
				this.loading.dismiss();
			},
			msg => {
				this.loading.dismiss();	
		});
	}
}