import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Receipt } from '../@models/receipt';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  collection = "Receipts";

  constructor(private firestore: AngularFirestore) { }

  createReceipt(receipt: Receipt){
      return this.firestore.collection(this.collection).add(receipt);    
  }
  
  updateReceipt(receipt: Receipt){
    const id = receipt.id;
    return this.firestore.doc(this.collection + '/' +id).update({...receipt});
    // return this.firestore.collection(this.collection);
  }

  deleteReceipt(id: string){
    return this.firestore.doc(this.collection + '/' + id).delete();
  }
  getOneReceipt(id: number) : Receipt {
    return {} as Receipt;
  }
  getAllReceipt() {
    return this.firestore.collection(this.collection).snapshotChanges();  
  }
}