import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Customer} from '../ngrx/models/customer';
import {select, Store} from '@ngrx/store';
import {getDataById, selectCustomers} from '../ngrx/store/selector/customer.selectors';
import {CustomerState} from '../ngrx/store/reducer/customer.reducer';
import * as CustomerActions from '../ngrx/store/action/customer.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public defaultColors: string[] = [
    'lightpink', 'red', 'orange',
    'yellow', 'green', 'blue', 'purple'
  ];
  textValue: any = ''
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }

  deleted(id: number){
    console.log('deletd data');
    const customer: Customer = {
      id: id,
      value: this.data.value,
      color: this.data.color,
    }
    console.log(customer);
    this.store.dispatch(CustomerActions.deletedCustomer(customer));
  }

  pickColor(event: any){
    if(this.textValue != ''){
        const customer: Customer = {
          id: this.data.id, 
          value: this.textValue,
          color: event.target.style.backgroundColor,
        }
        this.store.dispatch(CustomerActions.UpdateCustomer(customer));
      }else{
        const customer: Customer = {
          id: this.data.id, 
          value: this.data.value,
          color: event.target.style.backgroundColor,
        }
        this.store.dispatch(CustomerActions.UpdateCustomer(customer));
      }
  }
  getTextValue(value: any){
    this.textValue = value.target.value;
  }
  

}
