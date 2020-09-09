import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from './item';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private dbPath = '/items';
  itemsRef: AngularFirestoreCollection<Item> = null;

  constructor(private db: AngularFirestore)  {
    this.itemsRef = db.collection(this.dbPath);
   }

   createItem(item: Item): void {
    this.itemsRef.add({...item});
  }
 
  updateItem(key: string, value: any): Promise<void> {
    return this.itemsRef.doc(key).update(value);
  }
 
  deleteItem(key: string): Promise<void> {
    return this.itemsRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Item> {
    return this.itemsRef;
  }
 
  deleteAll() {
    this.itemsRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
