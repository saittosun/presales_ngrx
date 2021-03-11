import { map, take } from 'rxjs/operators';
import { select } from '@ngrx/store';
import { CustomerDetail } from './../../models/customer-detail.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CustomerDetailFacade } from './customer-detail-store/customer-detail.facade';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: CustomerDetail;

  constructor(private store: CustomerDetailFacade,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.loadCustomers();


    this.route.params.subscribe((params: Params) => {
      console.log(params.id);

      this.store.allCustomers$.pipe(take(1), map(customers => {
        console.log(customers);
        return customers.find(customer => customer.id === +params.id)
      }
      )).subscribe(customer => this.customer = customer)
      console.log(this.customer);
    })
  }

  // onEdit() {
  //   this.customer.addressline1 =
  // }

  ngOnDestroy(): void {
    // this.customersSub.unsubscribe();
  }

}
