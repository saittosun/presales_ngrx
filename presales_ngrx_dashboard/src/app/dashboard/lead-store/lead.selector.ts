// import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
// import * as fromCustomer from './lead.reducer'

// export interface State {
//   leadFeature: fromCustomer.LeadState;
// }
// export const reducers: ActionReducerMap<State> = {
//   leadFeature: fromCustomer.LeadReducer,
// };

// const getCustomerFeatureState =createFeatureSelector<fromCustomer.LeadState>('leadFeature')

// export const getProducts = createSelector(
//   getCustomerFeatureState,
//   state => {
//     return state.customers
//   }
// );

// export const getLoaded = createSelector(
//   getCustomerFeatureState,
//   state => {
//     return state.loaded
//   }
// );
