import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    
    console.log(this.cartService.getCartItem());
    this.items = this.cartService.getCartItem();
    console.log('cart.components.ts called' + this.items);
  }
}
