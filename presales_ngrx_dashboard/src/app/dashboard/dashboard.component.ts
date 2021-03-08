import { LeadService } from './services/lead.service';
import { ApiService } from '../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getLeads } from './store/dashboard.action';
import { Customer } from '../models/customer';
import * as fromApp from "./lead-store/lead.reducer";
import * as fromCustomer from "./lead-store/index";
import * as leadActions from "./lead-store/lead.action"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers$: Observable<Customer[]>;
  customersSub: Subscription;

  constructor(private apiService: ApiService,
              private store: Store<fromApp.LeadState>) { }

  ngOnInit(): void {

  //  this.leadNgrxStore.dispatch(new getLeads());
  //  this.customers = this.leadNgrxStore.fetchLeads()
    // this.customersSub = this.apiService.customersSub.subscribe(response => {
    //   this.customers = response;
    // })
    this.store.dispatch(new leadActions.Load());
    this.customers$ = this.store.pipe(select(fromCustomer.getProducts));
    console.log(this.customers$);
  }


  ngOnDestroy(): void {
    // this.customersSub.unsubscribe();
  }

// export class DashboardComponent implements OnInit {

//   customers: Observable<Customer[]>;
//   customersSub: Subscription;

//   constructor(private apiService: ApiService,
//               private store: Store<AppState>) {
//                 this.customers = this.store.select(state => state.customer)
//   }

//   addCustomerAndLead(id, customerName, projectName, status, date) {
//     this.store.dispatch({
//       type: 'ADD_CUSTOMERANDLEAD',
//       payload: <Customer> {
//         id: id,
//         customerName: customerName,
//         projectName: projectName,
//         status: status,
//         date: date
//       }
//     });
//   }

//   ngOnInit(): void { }

}
