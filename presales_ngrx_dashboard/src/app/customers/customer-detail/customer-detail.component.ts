import { getItemById } from './customer-detail-store/customer-detail.selector';
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
  customersSub: Subscription;
  id: number;

  constructor(private store: CustomerDetailFacade,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.loadCustomers();
    this.customers$ = this.store.allCustomers$;
    console.log(this.store.allCustomers$);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        console.log(this.id)
      }
    )
    this.getItemOnInit()
  }

  getItemOnInit(): void {
    // or any other way to retrieve id from route
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
    });
    console.log(id);
    this.store.allCustomers$.pipe(select(getItemById(id)))
  }

  ngOnDestroy(): void {
    // this.customersSub.unsubscribe();
  }

  onEdit() {
    //
  }

}
