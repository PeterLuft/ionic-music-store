import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartService} from '../../cart.service';
import {CartPage} from '../cart/cart';

@Component({
  selector: 'page-cart-details',
  templateUrl: 'cart-details.html'
})
export class CartDetailsPage {
  selectedProduct: any;

  constructor(public navCtrl: NavController, public navParams:NavParams, public cartService:CartService){
    this.selectedProduct = navParams.get('product');
  }

  removeFromCart(event, product){
    this.cartService.removeCartItem(product.id);
    this.navCtrl.setRoot(CartPage, {message: 'Item removed from cart'});
  }
}
