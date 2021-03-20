import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {StorageProvider} from '../../providers/storage/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-calificacion-detail',
  templateUrl: 'calificacion-detail.html',
})
export class CalificacionDetailPage {
	order: any;
  id: string = '';
  loading: Loading;
  success: boolean = false;
	Calification = {
	  	nombre: '',
	  	tipo: '',
	  	puntaje: 0,
	  	comentario: '',
      pedido_id: '',
      servicio_id: '',
      token: this.storage.get('tokenManappger')
	};
  loginCredentials = {
      user: '',
      password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage: StorageProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private auth: AuthServiceProvider, public element:ElementRef) {
  	this.order = navParams.get('service');
    this.id = this.order.id;
  	this.Calification.nombre = this.order.socio.nombre;
  	this.Calification.tipo = this.order.subcategoria.nombre;
    this.Calification.pedido_id = this.order.id;
    this.Calification.servicio_id = this.order.servicio_id;
    this.element = element;
  }

  ngAfterViewInit(){
    this.element.nativeElement.querySelector("textarea").style.height = "150px";
  }

  onModelChange(ev){
  	this.Calification.puntaje = ev;
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Enviando Calificación...'
    });
    this.loading.present();
  }

  rating(){
    this.showLoading();
    this.http.post('http://manappger.internow.com.mx/api/public/calificaciones/'+this.id, this.Calification)
    .toPromise()
    .then(
      data => {
        this.loading.dismiss();
        this.http.get('http://manappger.internow.com.mx/onesignalCalificaciones.php')
        .toPromise()
        .then(
          data => {
            
          },
          msg => {
        });
        this.success = true;
        this.showPopup('Éxito','¡Gracias por calificarnos!');
      },
      msg => {
        this.loading.dismiss();
        this.success = false;
        if (msg.status == 400 || msg.status == 401) {
          this.presentPrompt();
        } else {
          this.showPopup("Error", msg.error.error);
        }  
    });
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
            this.success = false;
              this.auth.login(this.loginCredentials).subscribe(allowed => {
            if (allowed) { 
              this.Calification.token = this.storage.get('tokenManappger');    
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

  showPopup(title, text) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.success) {
                this.navCtrl.popToRoot();
              }
            }
          }
        ]
      });
      alert.present();
  }
}
