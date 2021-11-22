import { Component, OnInit, Input } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Customer} from '../ngrx/models/customer';
import {select, Store} from '@ngrx/store';
import {getDataById, selectCustomers} from '../ngrx/store/selector/customer.selectors';
import {CustomerState} from '../ngrx/store/reducer/customer.reducer';
import {MatDialog} from '@angular/material/dialog';
import * as CustomerActions from '../ngrx/store/action/customer.actions';
import { ColorService } from '../color.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent implements OnInit {
  value: any;
  showMatCard: string = 'all';
  customers$: Observable<Customer[]>;
  customers: any[] = []

  constructor(private store: Store<CustomerState>, public dialog: MatDialog, private color: ColorService ) {
    this.customers$ = this.store.pipe(select(selectCustomers));  
  }

  ngOnInit(): void {
    console.log(this.showMatCard)
    this.color.currentColor.subscribe( res =>{
      console.log(res);
      this.showMatCard = res;
      // if(res == 'All' || res == ''){
      //   this.showMatCard = ;
      // }else{
      //   this.customers = [];
      //   this.store.select(getDataByColor,{ color }).subscribe( res => {
      //     for(var i=0; i< res.length; i++){
      //       this.customers.push(res[i]);
      //     }
      //     this.showMatCard = false
      //   })
      // }
    })
  }

  openDialog(id: any) {
    this.store.select(getDataById,{ id }).subscribe( res => {
          this.value = {
            value: res?.value,
            id: res?.id,
            color: res?.color
          };
        })
    this.dialog.open(DialogComponent, {
      data: this.value
    });
  }

}

