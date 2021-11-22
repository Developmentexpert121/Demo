import { createAction, props } from '@ngrx/store';
import {Customer} from '../../models/customer';
export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({customer})
);

export const UpdateCustomer = createAction(
  '[Customer] Update Customer',
  (customer: Customer) => ({customer})
);

export const deletedCustomer = createAction(
  '[Customer] Deleted Customer',
  (customer: Customer) => ({customer})
);

export const GetPreviousState = createAction(
  '[Customer] Get Previous State Customer',
  (customer: Customer) => ({customer})
);

export const GetColorData = createAction(
  '[Customer] Get Color Data',
  (customer: Customer) => ({customer})
);






