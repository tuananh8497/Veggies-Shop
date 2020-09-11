import { Injectable, Input } from '@angular/core';
import { Item } from '../items/item';
import { ItemService } from '../items/item.service';
import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];
  // @Input item = new Item;
  constructor(
    private itemService: ItemService
  ) { }

  addToCart(item){
    this.cartItems.push(item);
  }

  getCartItem() {
    console.log('cart.service.ts method (getCartTime) called: ' + this.cartItems);
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}