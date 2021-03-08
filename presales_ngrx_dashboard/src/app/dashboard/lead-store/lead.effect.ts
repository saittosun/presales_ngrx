import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";

import { Action, Store, select } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as fromCustomer from "./index"


import * as leadAction from "./lead.action";
import { of } from "rxjs/internal/observable/of";
import { empty } from "rxjs/internal/observable/empty";
import { LeadService } from './lead.service';


@Injectable()
export class LeadEffect {


  constructor(private leadService: LeadService,
              private action$: Actions,
              private store: Store<any>) {
  }

  @Effect()
  loadProduct$: Observable<Action> = this.action$.pipe(
    ofType(leadAction.LeadActionTypes.Load),
    withLatestFrom(this.store.pipe(select(fromCustomer.getLoaded))),
    switchMap(([, loaded]) => {
      if (loaded) {
        return empty();
      }

      console.log('LOADING DATA', loaded);

      return this.leadService.getCustomers().pipe(
        map((customers) => {
          return new leadAction.LoadSuccess(customers)
        }),
        catchError(err => of(new leadAction.LoadFail(err)))
      )
    })
  )
}
