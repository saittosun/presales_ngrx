import { Customer } from './../../models/customer';
import { LeadActions, LeadActionTypes } from "./lead.action";

export interface LeadState {
  customers: Customer[],
  loaded: boolean;
  error: string
}

const initialState: LeadState = {
  customers: [],
  loaded: false,
  error: ''
};


export function LeadReducer(state = initialState, action: LeadActions): LeadState {
  switch (action.type) {
  case LeadActionTypes.LoadSuccess:
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


