import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {CartProvider} from '../../providers/cart/cart';
import { PedidoPage } from '../pedido/pedido';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html',
})
export class ListDetailsPage {

	public subcategory: any;
  public itemsInCart: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartProvider: CartProvider, public alertCtrl: AlertController) {
    this.subcategory = this.cartProvider.getCartContents();
  }

  ionViewWillEnter() {
    this.itemsInCart = this.cartProvider.getCartCount();
  }

  pedido(event){
  	this.navCtrl.push(PedidoPage);
  }

  delete(item){
    this.cartProvider.removeItem(item).subscribe(
      success => {
        if (success) {
          this.subcategory = this.cartProvider.getCartContents();
          this.itemsInCart = this.cartProvider.getCartCount();
        } else {
          this.showPopup("Error", 'Ha ocurrido un error intenta de nuevo');
        }
      },
      error => {
        this.showPopup("Error", error);
      }
    );
  }

  delete_car(){
    this.presentConfirm();
  }

  agregar(){
    this.navCtrl.setRoot(HomePage); 
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

  presentConfirm() {
    const alert = this.alertCtrl.create({
      title: 'Vaciar Carrito',
      message: '¿Desea vaciar el carrito?',
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
            this.cartProvider.deleteCar();
            this.itemsInCart = 0;
            this.subcategory = [];
          }
        }
      ]
    });
    alert.present();
  }
}
