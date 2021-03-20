import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 Environment,
 LatLng,
 Geocoder, 
 GeocoderRequest, 
 GeocoderResult,
} from '@ionic-native/google-maps';
import { Component } from "@angular/core/";
import { NavController, Platform, AlertController, LoadingController, Loading, ToastController } from "ionic-angular";
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { EncaminoPage } from '../encamino/encamino';
import { CartProvider } from '../../providers/cart/cart';
import { StorageProvider } from '../../providers/storage/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
	map: GoogleMap;
	mapElement: HTMLElement;
	clients: string = "mapcontent";
	myPosition: any = {};
	total: number = 0;
	itemsInCart: any;
	address: any;
	ordens: any[] = [];
	loading: Loading;
	loadingG: Loading;
	refresh: boolean = false;
	Orders = {
	  	direccion: '',
	  	telefono: '',
	  	descripcion: '', 
	  	referencia: '',
	  	lat: 0,
	  	lng: 0,
	  	usuario_id: '',
	  	solicitud: '',
	  	token: this.storage.get('tokenManappger')
	};
	loginCredentials = {
	    user: '',
	    password: ''
	};
	mark: any;

	constructor(public navCtrl: NavController, public geolocation: Geolocation, public googleMaps: GoogleMaps, public cartProvider: CartProvider, public http: HttpClient, public geocoder: Geocoder, public storage: StorageProvider, public platform: Platform, public alertCtrl: AlertController, private loadingCtrl: LoadingController, private auth: AuthServiceProvider, private toastCtrl: ToastController) { 
		this.itemOrder();	
	}

	ionViewDidEnter() {	
	    this.platform.ready().then(()=>{
	  		this.getCurrentPosition();
	  	})
	}

	ionViewDidLeave() {
	    if (this.map) {
	      this.map.remove();
	      this.map.setDiv(null);
	    }
	    this.map = null;
	}

	itemOrder(){
		this.itemsInCart = this.cartProvider.getCartContents();
		for (var i = 0; i < this.itemsInCart.length; ++i) {
			this.ordens.push({categoria_id:this.itemsInCart[i].categoria_id, subcategoria_id: this.itemsInCart[i].id});
		}
		this.Orders.solicitud = JSON.stringify(this.ordens);
		this.Orders.usuario_id = this.storage.get('userManappger');
		let totals = this.cartProvider.getCartTotal();
		this.total = totals.toFixed(2);
	}

	getCurrentPosition(){
		this.showLoadingGeo();
		let optionsGPS = {timeout: 13000, enableHighAccuracy: true};
		this.geolocation.getCurrentPosition(optionsGPS)
		.then(position => {
			this.myPosition = {
			  latitude: position.coords.latitude,
			  longitude: position.coords.longitude
			}
			this.refresh = false;
			this.loadMap();
		})
		.catch((error) => {
			this.loadingG.dismiss();
			this.refresh = true;
			this.showPopup("Error", 'Active el GPS para encontrar su ubicación');
		})
	}

	loadMap() {
	    this.mapElement = document.getElementById('map');
	    let mapOptions: GoogleMapOptions = {
	      camera: {
	        target: {
	          lat: this.myPosition.latitude,
	          lng: this.myPosition.longitude
	        },
	        zoom: 18,
	        tilt: 30
	      }
	    };

	    this.map = this.googleMaps.create(this.mapElement, mapOptions);

	    setTimeout(function() { this.googleMaps.maps.event.trigger(this.map, 'resize') }, 600);

	    this.map.one(GoogleMapsEvent.MAP_READY)
		.then(() => {
			var htmlback = new Environment();
	      	htmlback.setBackgroundColor("#1e6594");

	   		this.refresh = false;
	   		this.loadingG.dismiss();
			this.map.addMarker({
			    title: 'Haz click en el mapa para encontrar tu ubicación',
			    icon: 'red',
			    animation: 'DROP',
			    position: {
			      lat: this.myPosition.latitude,
			      lng: this.myPosition.longitude
			    },
			    draggable: true
			})
			.then(marker => {
				this.doGeocode(marker);
				this.mark = marker;
				this.showPopup('Aviso','Haz click en el mapa para encontrar tu ubicación');
				marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(() => { 
				    var position = marker.getPosition();
				    this.myPosition.latitude = position.lat;
				    this.myPosition.longitude = position.lng;
				    marker.hideInfoWindow();
				    this.doGeocode(marker);
				});
			});

		 	this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((e) => { 
		  		let pos = new LatLng(e[0].lat,e[0].lng);
				this.mark.setPosition(pos);
				this.myPosition.latitude = e[0].lat;
				this.myPosition.longitude = e[0].lng;
				this.mark.hideInfoWindow();
				this.doGeocode(this.mark);
		  	});
		});
  	}

  	doGeocode(marker){
	  let request: GeocoderRequest = {
	    position: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
	  };

	  this.geocoder.geocode(request).then((results: GeocoderResult) => {
	    this.address = results[0].extra.lines;
	    /*this.address = [
	        (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""), 
	        (results[0].subLocality || ""), results[0].locality +" "+ (results[0].postalCode || "")
	    ].join(" ");*/
	    marker.setTitle(this.address);
	    marker.showInfoWindow();
	  });
	}

	order(){	
		this.showLoading();
		if (this.clients === 'mapcontent') {
			this.Orders.lat = this.myPosition.latitude;
			this.Orders.lng = this.myPosition.longitude;
			this.Orders.direccion = this.address;
		}
		this.http.post('http://manappger.internow.com.mx/api/public/pedidos', this.Orders)
        .toPromise()
        .then(
          data => {
          	this.loading.dismiss();
          	this.cartProvider.deleteCar();
          	this.http.get('http://manappger.internow.com.mx/onesignal.php')
			.toPromise()
			.then(
				data => {
					
				},
				msg => {
			});
          	this.navCtrl.push(EncaminoPage);
          },
          msg => {
          	this.loading.dismiss();
  			if (msg.status == 400 || msg.status == 401) {
  				this.presentPrompt();
  			} else {
  				let err = JSON.parse(msg.error);
    			this.showPopup("Error", err.error);
  			}
          }
        );
	}

	showLoading() {
	    this.loading = this.loadingCtrl.create({
	      content: 'Enviando Pedido...'
	    });
	    this.loading.present();
	}

	showLoadingGeo() {
	    this.loadingG = this.loadingCtrl.create({
	      content: 'Buscando Ubicación...'
	    });
	    this.loadingG.present();
	}

	showPopup(title, text) {
	    let alert = this.alertCtrl.create({
	      title: title,
	      subTitle: text,
	      buttons: [
	        {
	          text: 'OK',
	          handler: data => {
	          	
	          }
	        }
	      ]
	    });
	    alert.present();
	}

	presentPrompt() {
	  const alert = this.alertCtrl.create({
	    title: 'Validar Sesión',
	    inputs: [
	      {
	        name: 'usuario',
	        placeholder: 'USUARIO',
	        value: this.storage.get('nameManappger')
	      },
	      {
	        name: 'password',
	        placeholder: 'CONTRASEÑA',
	        type: 'password'
	      }
	    ],
	    buttons: [
	      {
	        text: 'CANCELAR',
	        role: 'cancel',
	        handler: data => {
	        }
	      },
	      {
	        text: 'ENTRAR',
	        handler: data => {
	        	this.loginCredentials.user = data.usuario;
	        	this.loginCredentials.password = data.password;
	          	this.auth.login(this.loginCredentials).subscribe(allowed => {
			      if (allowed) { 
			      	this.Orders.token = this.storage.get('tokenManappger');    
			        return false;
			      } else {
			        this.showPopup("Error","Error Accesso Denegado");
			        return false;
			      }
			    },
			      error => {
			        this.showPopup("Error",error.error);
			        return false;
			    });
	        }
	      }
	    ]
	  });
	  alert.present();
	}

	presentToast() {
	  let toast = this.toastCtrl.create({
	    message: 'Haz click en el mapa para encontrar tu ubicación',
	    position: 'bottom',
	    duration: 3000
	  });

	  toast.onDidDismiss(() => {
	    console.log('Dismissed toast');
	  });

	  toast.present();
	}
}
