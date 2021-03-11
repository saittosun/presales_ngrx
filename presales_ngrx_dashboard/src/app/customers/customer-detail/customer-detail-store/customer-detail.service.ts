import { CustomerDetailApi } from './../../../models/customer.detail';
import { CustomerDetail } from './../../../models/customer-detail.interface';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable()
export class CustomerDetailService {

  constructor() {}

  getCustomers(): Observable<CustomerDetail[]> {
    return new CustomerDetailApi().customerDetails;
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
