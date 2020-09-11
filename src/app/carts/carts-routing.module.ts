import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes = [
  {path: '', service: CartService},
  {path: 'cart', component: CartComponent,}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule]
})
export class CartsRoutingModule { }
