import { CustomerDetail } from './../../../models/customer-detail.interface';
import { CustomerDetailActions, CustomerDetailActionTypes } from "./customer-detail.action";

export interface CustomerDetailState {
  customers: CustomerDetail[],
  loaded: boolean;
  error: string
}

const initialState: CustomerDetailState = {
  customers: [
    {
      id: 1,
      customername: 'denderleeuw',
      addressline1: 'Nova',
      addressline2: 'offer',
      city: 'denderleeuw',
      country: 'België',
      state: 'oost-vlanderen',
      zip: '111',
      vat: 111,
      firstname: 'sait',
      lastname: 'tosun',
      email: 'test@test.com',
      phonenumber: 999999999
    }
  ],
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


