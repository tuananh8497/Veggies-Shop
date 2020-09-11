import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { Input } from '@angular/core';
import { CartService } from 'src/app/carts/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;
  
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService,
    ) { }
 
  ngOnInit() {
  }
 
  addToCart(item) {
    item = this.item;
    this.cartService.addToCart(item);
    console.log("item-detals.components.ts called: " + item.name + ' added to the cart');
    console.log(this.cartService.getCartItem());
  }

  updateAvailable(isAvailable: boolean) {
    this.itemService
      .updateItem(this.item.key, { available: isAvailable })
      .catch(err => console.log(err));
  }
 
  deleteItem() {
    this.itemService
      .deleteItem(this.item.key)
      .catch(err => console.log(err));
  }
}
