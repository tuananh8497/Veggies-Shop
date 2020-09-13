import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes = [
  {path: '', component: CartComponent,}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CartsRoutingModule { }
