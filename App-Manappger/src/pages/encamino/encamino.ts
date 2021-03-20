import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-encamino',
  templateUrl: 'encamino.html',
})
export class EncaminoPage {
  contact: string = '';
  cont: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.initContact();
  }

  initContact(){
    this.http.get('http://manappger.internow.com.mx/api/public/contacto')
    .toPromise()
    .then(
      data => {
        this.cont = data;
        this.contact = this.cont.contacto;
      },
      msg => {
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncaminoPage');
  }

	closeModal() {
    this.navCtrl.setRoot(HomePage);
	}
}
