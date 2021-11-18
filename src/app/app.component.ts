import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  showFiller = false;

  // customers$: Observable<Customer[]>;
  
  // constructor(private store: Store<CustomerState>) {
  //   this.customers$ = this.store.pipe(select(selectCustomers));
  //   console.log(this.customers$);
  // }

  ngOnInit(){
    // this.store.pipe(select(selectCustomers)).subscribe(customers => {
    //   console.log(customers);
    // });
  }

  // textValue: any = ''

  // pickColor(event: any){
  //   if(this.textValue != ''){
  //     // this.data.push({ value: this.textValue, color: event.target.style.backgroundColor  });
  //       const customer = new Customer();
  //       customer.value = this.textValue;
  //       customer.color = event.target.style.backgroundColor;
  //       console.log(customer)
  //       this.store.dispatch(CustomerActions.loadCustomers(customer));
  //   }
    // console.log(event.target.style.backgroundColor);
  // }
  // getTextValue(value: any){
  //   this.textValue = value.target.value;
  // }
}
