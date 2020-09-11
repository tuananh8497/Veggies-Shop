import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Item } from './item';
import  { ItemsListComponent } from './items-list/items-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CartsRoutingModule } from '../carts/carts-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
        { path: '', component: ItemsListComponent },
        { path: '', component: ItemDetailsComponent},
        { path: 'add', component: CreateItemComponent },
        { path: 'edit/:id', component: CreateItemComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CartsRoutingModule,
    ],
    exports: [
        RouterModule,
        CartsRoutingModule,
    ]
})
export class ItemRoutingModule { }