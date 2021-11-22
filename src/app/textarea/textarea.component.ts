import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../ngrx/models/customer';
import { CustomerState } from '../ngrx/store/reducer/customer.reducer';
import * as CustomerActions from '../ngrx/store/action/customer.actions';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  textValue: any = ''
  value = ''
  noteForm: FormGroup;
  showColor: boolean = false;
  public defaultColors: string[] = [
    'lightpink', 'red', 'orange',
    'yellow', 'green', 'blue', 'purple'
  ];
  id = 1;
 
  constructor(private store: Store<CustomerState>, private _snackBar: MatSnackBar, private fb: FormBuilder){
    this.noteForm = this.fb.group({
      notes : ['']
    })
  }

  pickColor(event: any){
    if(this.noteForm.value.notes != null && this.noteForm.value.notes != ''){
      this.id++;
        const customer = new Customer();
        customer.value = this.noteForm.value.notes;
        customer.color = event.target.style.backgroundColor;
        customer.id = this.id;
        this.store.dispatch(CustomerActions.addCustomer(customer));
        this.noteForm.reset();
        var snackData = this._snackBar.open('Note Added', 'Undo',{ duration : 2000});
        console.log(snackData);
        snackData.afterDismissed().subscribe( res => {
          console.log('hello this is dismissed');
        })
        snackData.onAction().subscribe( res => {
          this.store.dispatch(CustomerActions.GetColorData(customer));
        })
        
       
    }
  }
  getTextValue(value: any){
    this.textValue = value.target.value;
  }

  ngOnInit(): void {
  }

}
