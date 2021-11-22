
import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import {Customer} from '../../models/customer';
export const customerFeatureKey = 'customer';
export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: [
    {
    id: 1 , value: 'Good Morning, How Are You', color: 'orange'
  },
  ]
};


export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer,
    (state: CustomerState, {customer}) =>{
      return {...state,
          customers: [...state.customers, customer]
        }
    }
      // ({...state,
      //   customers: [...state.customers, customer]
      // })
      ),
      on(CustomerActions.UpdateCustomer, (state: CustomerState, action) => {
        const updatedData = state.customers.map( customer => { return action.customer.id === customer.id ? action.customer: customer})
        return { ...state, customers: updatedData }
      }), 
      on(CustomerActions.deletedCustomer, (state: CustomerState, action) => {
        const updatedData = state.customers.filter( customer => { return action.customer.id !== customer.id})
        return { ...state, customers: updatedData }
      })
);
export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
