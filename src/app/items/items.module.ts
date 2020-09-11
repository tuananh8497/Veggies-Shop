import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemService } from './item.service';
import { ItemRoutingModule } from './item-routing.module';
import { CartsRoutingModule } from '../carts/carts-routing.module';
import { CartService } from '../carts/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartsRoutingModule,
    ItemRoutingModule
  ],
  exports: [],
  providers: [CartService]
})
export class ItemsModule { }
