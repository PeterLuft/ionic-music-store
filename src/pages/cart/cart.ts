import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { CartDetailsPage} from "../cart-details/cart-details";
import { CartService} from '../../cart.service';
import {ToastController} from 'ionic-angular';
import { CheckoutPage} from "../checkout/checkout";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  cartItems: Array<{name: string, id: string, description: string, price: string, image: string}>;
  total: string;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, private cartService:CartService){
    this.message = navParams.get('message');

    if(this.message){
      this.toastMessage();
    }

    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();

  }

  productClicked(event, product){
    this.message = null;
    this.navCtrl.push(CartDetailsPage,  {
      product: product
    })
  }

  checkoutClicked(event){
    this.message = null;
    this.navCtrl.push(CheckoutPage, {});
  }

  toastMessage(){
    let toast = this.toastCtrl.create({
      position: 'middle',
      message: this.message,
      duration: 2000
    });
    toast.present();
  }
}
