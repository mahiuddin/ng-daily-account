import { Component, OnInit } from '@angular/core';
import { Payment } from '../@models/payment';
import { PaymentService } from '../@services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payments: Payment[] = [];

  payment: Payment = {} as Payment;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getAllPayment().subscribe((data:any)=>{
      this.payments = data.map((e:any)=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as Payment[]
      })
    })
  }

  savePayment(){
    if(this.payment.id){
      this.paymentService.updatePayment(this.payment);
    }else{
      this.paymentService.createPayment(this.payment);
    }    
  }

  updatePayment(payment: Payment){
    this.payment = payment; 
  }

  resetForm(){
    this.payment = {} as Payment; 
  }

  deletePayment(payment: Payment){
    this.paymentService.deletePayment(payment.id).then((res)=>{
      alert("Payment Deleted Successfully");
      this.payment = {} as Payment;
    });
  }

}
