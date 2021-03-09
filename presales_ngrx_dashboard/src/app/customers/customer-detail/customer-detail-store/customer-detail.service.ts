import { CustomerDetailApi } from './../../../models/customer.detail';
import { CustomerDetail } from './../../../models/customer-detail.interface';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { catchError, map } from "rxjs/operators";

import {throwError} from "rxjs/internal/observable/throwError";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CustomerDetailService {
  private _customerSub = new BehaviorSubject<CustomerDetail[]>( new CustomerDetailApi().customerDetails)

  constructor() {}

  getCustomers(): Observable<CustomerDetail[]> {
  return this._customerSub
    .pipe(
      map((data) => {
        return data
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
