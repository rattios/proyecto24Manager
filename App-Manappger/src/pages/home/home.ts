import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, MenuController, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {CartProvider} from '../../providers/cart/cart';
import {StorageProvider} from '../../providers/storage/storage';
import { ListDetailsPage } from '../list-details/list-details';
import { ListPage } from '../list/list';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	category: any;
	categories: any[];
	itemsInCart: number;
	loading: Loading;
	slide:any;
	slides:any[];
	haveData:boolean = false;
	rating:any;
	califications:any;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public cartProvider:CartProvider, private loadingCtrl: LoadingController, public storage: StorageProvider, public menuCtrl: MenuController, public events: Events) {
		let item = this.storage.getObject('category');
	    if (item) {
	    	this.categories = item;
	    } else {
	    	this.initCategories();		
	    }
	    this.initSlide();   
	}

	ionViewWillEnter() {
		this.itemsInCart = this.cartProvider.getCartCount();
		this.getCalifications();
	}

	getCalifications(){
		let id = this.storage.get('userManappger');
		this.http.get('http://manappger.internow.com.mx/api/public/usuarios/'+id+'/pedidos/SinCalificar')
		.toPromise()
		.then(
			data => {
				this.rating = data;
				this.califications = this.rating.sinCalificar;
				this.events.publish('user:created', this.califications, Date.now());
			},
			msg => {	
		});
	}

	initCategories(){
		this.showLoading();
		this.http.get('http://manappger.internow.com.mx/api/public/categorias/subcategorias')
		.toPromise()
		.then(
			data => {
				this.category = data;
				this.categories = this.category.categorias;
				this.storage.setObject('category', this.categories);
				this.loading.dismiss();
			},
			msg => {
				this.loading.dismiss();	
		});
	}

	initSlide(){
		this.http.get('http://manappger.internow.com.mx/api/public/slider')
		.toPromise()
		.then(
			data => {
				this.slide = data;
				this.slides = this.slide.slider;
				if(this.slides.length >= 1) {
			        this.haveData=true;
			    }
			},
			msg => {
				this.haveData = false;
		});	
	}

	goToSubcategory(category){
		this.navCtrl.push(ListPage, {subcategory: category});
	}

	goToCart(){
		this.navCtrl.push(ListDetailsPage);
	}

	showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Cargando Servicios...'
      });
      this.loading.present();
  	}

}
