import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { LeadFacade } from './lead-store/lead.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers$: Observable<Customer[]>;
  customersSub: Subscription;

  constructor(private store: LeadFacade) { }

  ngOnInit(): void {

    this.store.loadCustomers();
    this.customers$ = this.store.allLeads$;
    console.log(this.customers$);
  }


  ngOnDestroy(): void {
    this.customersSub.unsubscribe();
  }

}
