import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Customer} from '../ngrx/models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../ngrx/store/selector/customer.selectors';
import {CustomerState} from '../ngrx/store/reducer/customer.reducer';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent implements OnInit {
  customers$: Observable<Customer[]>;
  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
    console.log(this.customers$);
  }

  ngOnInit(): void {
  }

}
