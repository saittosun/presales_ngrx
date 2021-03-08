import { getLeads, LeadActions } from './dashboard.action';
import { createSelector } from "@ngrx/store";
import { IAppState, ILeadListState } from "./dashboard.types";

export const LEADS_ROOT_SELECTOR = (state: IAppState) => state.leads;

// export const LEADS_ALL = createSelector(
//   LEADS_ROOT_SELECTOR,
//   (state: ILeadListState) => state.results,
// );

// export const LEADS_LOADING = createSelector(
//   LEADS_ROOT_SELECTOR,
//   (state: ILeadListState) => state.loading,
// );

// export const LEADS_ERROR = createSelector(
//   LEADS_ROOT_SELECTOR,
//   (state: ILeadListState) => state.error,
// );

