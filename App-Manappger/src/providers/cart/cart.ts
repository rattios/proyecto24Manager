import {Injectable} from '@angular/core';
import {StorageProvider} from '../storage/storage';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CartProvider {
  cartObj: any = {};

  constructor(public storage: StorageProvider) {
    let item = this.storage.getObject('cartManappger');
    if (item) {
    	this.cartObj.cart = item.cart;
		  this.cartObj.total = item.total;
		  this.cartObj.cantidad = item.cantidad;
    } else {
    	this.cartObj.cart = [];
		  this.cartObj.total = 0;
		  this.cartObj.cantidad = 0;
    } 
  }

  addToCart(product, quantity) {
 	  return Observable.create(observer => {
      console.log(this.cartObj);
      if(this.cartObj.cart.some(x => x.id === product.id)){
  			observer.error('Este servicio ya esta incluido en el pedido');
  			observer.complete();
  		} else{
  		  this.cartObj.cart.push( { "id": product.id ,"categoria_id": product.categoria_id , "imagen": product.imagen , "nombre": product.nombre , "costo": product.costo , "cantidad": quantity } );
  			this.cartObj.cantidad += 1;	
  			this.cartObj.total += parseFloat(product.costo);
  			this.storage.setObject('cartManappger', this.cartObj);
  			observer.next(this.cartObj);
  			observer.complete();
  		}
    });
  }

  getCartContents() {
  	return this.cartObj.cart;
  }

  getCartCount(){
  	return this.cartObj.cantidad;
  }
  
  getCartTotal(){
  	return this.cartObj.total;
  }
 
  removeItem(product) {
    return Observable.create(observer => {
    	let index = this.cartObj.cart.findIndex((item) => item.id === product.id);
      if(index !== -1){
      	this.cartObj.cart.splice(index, 1);
  			this.cartObj.cantidad -= 1;	
  			this.cartObj.total -= parseFloat(product.costo);
        if (this.cartObj.cantidad === 0) {
          this.storage.remove('cartManappger');
        } else {
          this.storage.setObject('cartManappger', this.cartObj);
        }
  			observer.next(this.cartObj);
  			observer.complete();
  		} else{
  			observer.error('Este servicio no esta incluido en el pedido');
  			observer.complete(); 
  		}
    });
  }

  deleteCar(){
    this.cartObj.cart = [];
    this.cartObj.total = 0;
    this.cartObj.cantidad = 0;
    this.storage.setObject('cartManappger',this.cartObj);
  }
}

