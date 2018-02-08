import {Injectable} from '@angular/core';

@Injectable()
export class CartService {

  private cart: Array<{ name: string, id: string, description: string, price: string, image: string }>;

  constructor() {
    this.cart = [];
  }

  setCart(product) {
    this.cart.push(product);
  }

  removeCartItem(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if(this.cart[i].id == id){
        this.cart.splice(i, 1);
        return;
      }
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    let currentTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      currentTotal += parseFloat(this.cart[i].price);
    }
    return "$" + currentTotal.toFixed(2);
  }

  getNumItems(){

    if(this.cart.length){
      return this.cart.length;
    }
    else{
      return 0;
    }
  }

  clearCart(){
    this.cart = [];
  }


}
