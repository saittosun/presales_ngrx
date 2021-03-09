import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private store: LeadFacade,
              private router: Router) { }

  ngOnInit(): void {

    this.store.loadCustomers();
    this.customers$ = this.store.allLeads$;
  }

  onLeadDetail() {
    this.router.navigate(['/new/customer-detail'])
  }

  ngOnDestroy(): void {
    // this.customersSub.unsubscribe();
  }

}
