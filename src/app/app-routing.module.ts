import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ItemsListComponent } from './items/items-list/items-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'add', component: CreateItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
