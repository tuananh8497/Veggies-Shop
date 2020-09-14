import { Component, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from 'src/app/items/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit {

  @Output() items: Array<Item> = [];
  
  fruits = ['mango', ' apple', 'banana', 'pineapple'];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItem();
    console.log('cart.component.ts called: '  + this.items)
    console.log('cart.component.ts called: ' + this.items[0].name );
    }
}
