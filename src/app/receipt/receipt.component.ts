import { Component, OnInit } from '@angular/core';
import { Receipt } from '../@models/receipt';
import { ReceiptService } from '../@services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  receipts: Receipt[] = [];

  receipt: Receipt = {} as Receipt;

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.receiptService.getAllReceipt().subscribe((data:any)=>{
      this.receipts = data.map((e:any)=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as Receipt[]
      })
    })
  }

  saveReceipt(){
    if(this.receipt.id){
      this.receiptService.updateReceipt(this.receipt);
    }else{
      this.receiptService.createReceipt(this.receipt);
    }    
  }

  updateReceipt(receipt: Receipt){
    this.receipt = receipt; 
  }

  resetForm(){
    this.receipt = {} as Receipt; 
  }

  deleteReceipt(receipt: Receipt){
    this.receiptService.deleteReceipt(receipt.id).then((res)=>{
      alert("Receipt Deleted Successfully");
      this.receipt = {} as Receipt;
    });
  }
}