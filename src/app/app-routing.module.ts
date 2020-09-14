import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { HomeComponent } from './home/home.component';
import { BreweriesComponent } from './breweries/breweries.component';
import {LoginComponent} from './account/login/login.component';
// import { CartComponent } from './carts/cart/cart.component';
import {CartComponent} from './cart/cart.component';

// const cartModule = () => import('./carts/carts.module').then(x => x.CartsModule);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'add', component: CreateItemComponent },
  { path: 'brew', component: BreweriesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CartComponent},

  // { path: 'carts', loadChildren: cartModule}
  // { path: 'carts', component: CartsComponent},
  // { path: 'carts', loadChildren: cartModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
