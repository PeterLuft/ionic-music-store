import { Component } from '@angular/core';
import { ToastController} from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage} from "../cart/cart";
import { ItemDetailsPage } from '../item-details/item-details';
import { CartService} from "../../cart.service";


import * as data from '../../assets/products.json';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  message: string;
  products: Array<{name: string, id: string, description: string, price: string, image: string}>;
  numCartItems: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, public cartService:CartService) {

    this.message = navParams.get('message');
    this.numCartItems = this.cartService.getNumItems();
    this.products = [];

    if(this.message){
      this.toastMessage();
    }

    for(let i = 0; i < data["products"].length; i++){
      this.products.push({
        name: data["products"][i].name,
        id: data["products"][i].id,
        description: data["products"][i].description,
        price: data["products"][i].price,
        image: '../../assets/imgs/p' + data["products"][i].id + '.jpg'
      });
    }
  }


  productClicked(event, product){
    this.message = null;
    this.navCtrl.push(ItemDetailsPage, {
      product: product
    })
  }

  toastMessage(){
    let toast = this.toastCtrl.create({
      position: 'middle',
      message: this.message,
      duration: 2000
    });
    toast.present();
  }

  cartIconClicked(event){
    this.navCtrl.setRoot(CartPage);
  }
}
