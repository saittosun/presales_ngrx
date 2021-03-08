import { ILead } from './../types/dashboard.lead-types';
import { Action, createAction, props } from "@ngrx/store";

export enum LeadActions {
  getLeads = "[Leads]: get all leads",
  getLeadsSuccess = "[Leads]: get all leads success",
  getLeadsFailed = "[Leads]: get all leads failed"
}

export const getLeads = createAction(LeadActions.getLeads);

export const getLeadsSuccess = createAction(
  LeadActions.getLeadsSuccess,
  props<{ results: ILead[] }>()
);

export const getLeadsFailed = createAction(
  LeadActions.getLeadsFailed,
  props<{ error: string }>()
);

// export class getLeads implements Action {
//   readonly type = LeadActions.getLeads
// }

// export class getLeadsSuccess implements Action {
//   readonly type = LeadActions.getLeadsSuccess;
//   constructor(public payload: ILead[]) {}
// }

// export class getLeadsFailed implements Action {
//   readonly type = LeadActions.getLeadsFailed;
//   constructor(public payload: any) {}
// }
