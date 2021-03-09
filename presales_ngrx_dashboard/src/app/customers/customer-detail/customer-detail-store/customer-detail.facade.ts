import { CustomerDetail } from './../../../models/customer-detail.interface';
import { getCustomers } from './customer-detail.selector';
import { Load } from './customer-detail.action';
import { select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from "./customer-detail.reducer";

@Injectable({
  providedIn: 'root'
})

export class CustomerDetailFacade {
  allCustomers$: Observable<CustomerDetail[]> = this.store.pipe(select(getCustomers))

  constructor(private store: Store<fromApp.CustomerDetailState>) { }

  loadCustomers() {
    this.store.dispatch(new Load())
  }

}
