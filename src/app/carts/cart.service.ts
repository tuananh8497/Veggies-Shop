import { Injectable, Input } from '@angular/core';
import { Item } from '../items/item';
import { ItemService } from '../items/item.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];
  items = [];
  // @Input item = new Item;
  constructor(
    private itemService: ItemService,
    private http: HttpClient
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

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
