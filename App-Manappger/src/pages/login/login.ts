import { Component } from '@angular/core';
import { NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { RegistroSocioPage } from '../registro-socio/registro-socio';
import { EmailPasswordPage } from '../email-password/email-password';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginCredentials = {
    user: '',
    password: ''
  };
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrar_usuario() {
    this.navCtrl.push(RegistroUsuarioPage);
  }

  registrar_socio() {
    this.navCtrl.push(RegistroSocioPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.loginCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot(HomePage);
      } else {
        this.showError("Accesso Denegado");
      }
    },
      error => {
        this.showError(error.error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  olvido_password(){
    this.navCtrl.push(EmailPasswordPage);
  }

}
