import { Component, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from 'src/app/items/item';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit {

  items: Array<Item> = [];
  selectedItem: Array<Item> = [];
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit(): void {
    console.log(this.cartService.getCartItem());
    this.items = this.cartService.getCartItem();
    console.log('cart.components.ts called' + this.items);
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
