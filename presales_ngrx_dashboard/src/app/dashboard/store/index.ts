// import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
// import * as fromCustomer from './dashboard.reducer'

// export interface State {
//   customerFeature: fromCustomer.CustomerState;
// }
// export const reducers: ActionReducerMap<State> = {
//   customerFeature: fromCustomer.DashboardReducer,
// };

// const getCustomerFeatureState =createFeatureSelector<fromCustomer.CustomerState>('customerFeature')

// export const getCustomers = createSelector(
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
