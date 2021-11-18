import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Customer } from '../ngrx/models/customer';
import { CustomerState } from '../ngrx/store/reducer/customer.reducer';
import {selectCustomers} from '../ngrx/store/selector/customer.selectors';
import * as CustomerActions from '../ngrx/store/action/customer.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  textValue: any = ''
  showColor: boolean = false;
  public defaultColors: string[] = [
    'black', 'red', 'orange',
    'yellow', 'green', 'blue', 'purple'
  ];
 
  constructor(private store: Store<CustomerState>){}

  pickColor(event: any){
    if(this.textValue != ''){
      // this.data.push({ value: this.textValue, color: event.target.style.backgroundColor  });
        const customer = new Customer();
        customer.value = this.textValue;
        customer.color = event.target.style.backgroundColor;
        console.log(customer)
        this.store.dispatch(CustomerActions.addCustomer(customer));
    }
  }
  getTextValue(value: any){
    this.textValue = value.target.value;
  }

  ngOnInit(): void {
  }

}
