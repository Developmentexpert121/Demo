import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey,
);
export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);

export const getDataById = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState, props: any) => {
    return state.customers.find((data)=>data.id == props.id)}
);

export const getDataByColor = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState, props: any) => {
    var data1: any= [];
    return state.customers.filter((data)=> data.color == props.color )}
);