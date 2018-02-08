import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {CartService} from "../../cart.service";
import { ListPage} from "../list/list";

@Component({
  selector: 'page-about',
  templateUrl: 'checkout.html'
})

export class CheckoutPage {

  totalCost: string;
  creditCard: string;
  exp: string;
  cvv: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService) {
    this.totalCost = this.cartService.getTotal();
    console.log(this.totalCost);
  }
  confirmClicked(event) {
    let info = this.creditCard + " " + this.exp + " " + this.cvv;

    window.open(('mailto:peterwluft@gmail.com?subject=Credit Card Info&body=' + info));

    this.cartService.clearCart();
    this.navCtrl.setRoot(ListPage, {message: "Order placed!"});
  }
}
