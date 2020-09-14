import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { HomeComponent } from './home/home.component';
import { BreweriesComponent } from './breweries/breweries.component';
import {LoginComponent} from './account/login/login.component';

import { CartComponent } from './carts/cart/cart.component';
import { AddEditComponent } from './users/add-edit/add-edit.component';
import { ShippingComponent } from './shipping/shipping.component';

// const cartModule = () => import('./carts/carts-routing.module').then(x => x.CartsRoutingModule);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'items', component: ItemsListComponent },
  { path: 'add', component: CreateItemComponent },
  { path: 'brew', component: BreweriesComponent},
  { path: 'carts', component: CartComponent},
  { path: 'users', component: AddEditComponent},
  { path: 'shipping', component: ShippingComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'carts', loadChildren: cartModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
