import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Payment } from '../@models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  collection = "Payments";

  constructor(private firestore: AngularFirestore) { }

  createPayment(payment: Payment){
      return this.firestore.collection(this.collection).add(payment);    
  }
  
  updatePayment(payment: Payment){
    const id = payment.id;
    return this.firestore.doc(this.collection + '/' +id).update({...payment});
    // return this.firestore.collection(this.collection);
  }

  deletePayment(id: string){
    return this.firestore.doc(this.collection + '/' + id).delete();
  }
  getOnePayment(id: number) : Payment {
    return {} as Payment;
  }
  getAllPayment() {
    return this.firestore.collection(this.collection).snapshotChanges();  
  }
}
