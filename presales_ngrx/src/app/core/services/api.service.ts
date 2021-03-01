import { Customer } from '../../models/customer';
import { Api } from '../../models/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _customersSub = new BehaviorSubject<Customer[]>( new Api().customers)

  constructor() { }

  // get customersOnce() {
  //   return this._customersSub.asObservable().pipe(take(1));
  // }

  get customersSub() {
    return this._customersSub.asObservable();
  }

  updateCustomer(customers: Customer[]) {
    this._customersSub.next(customers)
  }

  // get customerArray() {
  //   const api = new Api();
  //   return [...api.customers]
  // }

}
