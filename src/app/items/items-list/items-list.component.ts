import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: any;
 
  constructor(private itemService: ItemService) { }
 
  ngOnInit() {
    this.getItemsList();
  }
 
  getItemsList() {
    this.itemService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(items => {
      this.items = items;
    });
  }
 
  deleteItems() {
    this.itemService.deleteAll();
  }
 
}
