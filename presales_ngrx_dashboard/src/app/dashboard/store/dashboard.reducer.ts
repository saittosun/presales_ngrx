// import { ActionReducerMap, createReducer, on } from "@ngrx/store";
// import { LeadActions, getLeads, getLeadsSuccess, getLeadsFailed } from "./dashboard.action";
// import { ILeadListState } from "./dashboard.types";

// export const LEAD_INITIAL_STATE: ILeadListState = {
//   results: [],
//   loading: false,
//   error: null
// };

// export const dashboardReducer = (state: any, action: any) =>
//   createReducer(
//     // LEAD_INITIAL_STATE as any
//     // on(getLeads, (actionState: ILeadListState) => ({
//     //   ...actionState,
//     //   loading: true,
//     //   error: null
//     // })) as any
//     // on(
//     //   getLeadsSuccess,
//     //   (state: ILeadListState, { results }: any) => ({
//     //     ...state,
//     //     results,
//     //     loading: false,
//     //     error: null
//     //   })
//     // ) as any,
//     // on(
//     //   getLeadsFailed,
//     //   (state: ILeadListState, { error }: any) => ({
//     //     ...state,
//     //     loading: false,
//     //     error
//     //   })
//     // ) as any
//     LEAD_INITIAL_STATE,
//     on(getLeads, (actionState: ILeadListState) => ({
//       ...actionState,
//       loading: true,
//       error: null
//     })) as any,
//     on(
//       getLeadsSuccess,
//       (state: ILeadListState, { results }: any) => ({
//         ...state,
//         results,
//         loading: false,
//         error: null
//       })
//     ) as any,
//     on(
//       getLeadsFailed,
//       (state: ILeadListState, { error }: any) => ({
//         ...state,
//         loading: false,
//         error
//       })
//     ) as any
//   );

// export const leadReducers: any = {
//   result: dashboardReducer
// };
