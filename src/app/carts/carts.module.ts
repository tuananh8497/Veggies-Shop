import { NgModule } from '@angular/core';
import { CartsRoutingModule} from './carts-routing.module';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from '../items/item-routing.module';
import { ItemService } from '../items/item.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartsRoutingModule,
  ],
  // providers: [CartService],
  providers: [ItemService]
})
export class CartsModule { }
