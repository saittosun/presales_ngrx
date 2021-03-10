import { select } from '@ngrx/store';
import { CustomerDetail } from './../../models/customer-detail.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CustomerDetailFacade } from './customer-detail-store/customer-detail.facade';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customers$: Observable<CustomerDetail[]>;

  constructor(private store: CustomerDetailFacade) { }

  ngOnInit(): void {
    this.store.loadCustomers();
    this.customers$ = this.store.allCustomers$;
    console.log(this.store.allCustomers$);
  }

  ngOnDestroy(): void {
    // this.customersSub.unsubscribe();
  }

}
