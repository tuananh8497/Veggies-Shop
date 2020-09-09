import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: Item = new Item();
  submitted = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  newItem(): void{
    this.submitted = false;
    this.item = new Item();
  }

  save(){
    this.itemService.createItem(this.item);
    this.item = new Item();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
