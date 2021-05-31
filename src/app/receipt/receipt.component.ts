import { Component, OnInit } from '@angular/core';
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
  }

  saveReceipt(){
    // this.receiptService.addReceipt(this.rece)
  }

}

export interface Receipt{
  id:number;
  receiptDate : string;
  particular: string;
  entity: string;
  method: string;
  amount: number;
  description: string;
}