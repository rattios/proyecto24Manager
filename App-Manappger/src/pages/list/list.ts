import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {CartProvider} from '../../providers/cart/cart';
import { ListDetailsPage } from '../list-details/list-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  category: any;
  quantity:number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartProvider: CartProvider, public alertCtrl: AlertController) {
    this.category = navParams.get('subcategory');
  }

  itemTapped(event, item) {
    this.presentConfirm(item);
  }

  presentConfirm(item) {
    const alert = this.alertCtrl.create({
      title: 'Agregar Servicio',
      message: '¿Desea agregar al carrito?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'SI',
          handler: () => {
            this.cartProvider.addToCart(item, this.quantity).subscribe(
              success => {
                if (success) {
                   this.navCtrl.push(ListDetailsPage);
                } else {
                  this.showPopup("Error", 'Ha ocurrido un error intenta de nuevo');
                }
              },
              error => {
                this.showPopup("Aviso", error);
              }
            );
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
          }
        }
      ]
    });
    alert.present();
  }
}
