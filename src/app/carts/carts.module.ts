import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartsRoutingModule} from './carts-routing.module';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CartService,
    CartComponent
  ],
  imports: [
    CommonModule,
    CartsRoutingModule,
    CartService,
    BrowserModule,
  ]
})
export class CartsModule { }
