import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartService} from '../../cart.service';
import { ListPage} from '../list/list';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedProduct: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService:CartService) {
    this.selectedProduct = navParams.get('product');
  }

  addToCart(event, product){
    this.cartService.setCart(product);
    this.navCtrl.setRoot(ListPage, {message: 'Item Added To Cart'})
  }
}
