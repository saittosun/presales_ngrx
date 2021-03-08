// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, map, switchMap } from "rxjs/operators";

// import { LeadService } from "../services/lead.service";
// import { ILead } from "../types/dashboard.lead-types";
// import { getLeadsFailed } from "./dashboard.action";
// import { getLeadsSuccess } from "./dashboard.action";
// import { LeadActions } from "./dashboard.action";

// @Injectable()
// export class LeadEffects {
//   constructor(
//     private actions$: Actions,
//     private leadService: LeadService
//   ) {}

//   public getLeads$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(LeadActions.getLeads),
//       switchMap(() =>
//         this.leadService.fetchLeads().pipe(
//           map((results: ILead[]) => getLeadsSuccess({ results })),
//           catchError((error: Error) =>
//             getLeadsFailed({ error: error.message })
//           )
//         )
//       )
//     )
//   );
// }
