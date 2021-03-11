import { CustomerDetail } from './../../../models/customer-detail.interface';
import { CustomerDetailActions, CustomerDetailActionTypes } from "./customer-detail.action";

export interface CustomerDetailState {
  customers: CustomerDetail[],
  loaded: boolean;
  error: string
}

const initialState: CustomerDetailState = {
  customers: [],
  loaded: false,
  error: ''
};


export function CustomerDetailReducer(state = initialState, action: CustomerDetailActions): CustomerDetailState {
  switch (action.type) {
  case CustomerDetailActionTypes.LoadSuccess:
    return {
      ...state,
      customers: [...action.payload],
      loaded: true,
      error: ''
    }
      default:
        return state
    }
}


