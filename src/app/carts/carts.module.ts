import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartsRoutingModule} from './carts-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartsRoutingModule,
  ],
  providers: [CartService]
})
export class CartsModule { }
