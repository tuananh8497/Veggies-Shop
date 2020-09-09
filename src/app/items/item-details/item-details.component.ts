import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;
 
  constructor(private itemService: ItemService) { }
 
  ngOnInit() {
  }
 
  updateAvailable(isAvailable: boolean) {
    this.itemService
      .updateItem(this.item.key, { available: isAvailable })
      .catch(err => console.log(err));
  }
 
  deleteItem() {
    this.itemService
      .deleteItem(this.item.key)
      .catch(err => console.log(err));
  }
}
