// import { ILead } from './../types/dashboard.lead-types';
// import { Injectable } from "@angular/core";
// import { select, Store } from "@ngrx/store";
// import { Observable } from "rxjs";

// import { getLeads } from "../store/dashboard.action";
// import {
//   LEADS_ALL,
//   LEADS_ERROR,
//   LEADS_LOADING
// } from "../store/dashboard.selector";
// import { IAppState } from "../store/dashboard.types";

// @Injectable()
// export class LeadsFacade {
//   constructor(private store: Store<IAppState>) {}

//   public selectAll(): Observable<ILead[]> {
//     return this.store.pipe(select(LEADS_ALL));
//   }

//   public selectLoading(): Observable<boolean> {
//     return this.store.pipe(select(LEADS_LOADING));
//   }

//   public selectError(): Observable<string> {
//     return this.store.pipe(select(LEADS_ERROR));
//   }

//   public getLeads(): void {
//     this.store.dispatch(getLeads());
//   }
// }
