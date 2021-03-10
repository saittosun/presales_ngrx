// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, Subscription } from 'rxjs';
// import { Customer } from '../models/customer';
// import { LeadFacade } from './lead-store/lead.facade';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit, OnDestroy {
//   customers$: Observable<Customer[]>;
//   customersSub: Subscription;

//   constructor(private store: LeadFacade,
//               private router: Router) { }

//   ngOnInit(): void {

//     this.store.loadCustomers();
//     this.customers$ = this.store.allLeads$;
//   }

//   onLeadDetail() {
//     this.router.navigate(['/new/customer-detail'])
//   }

//   ngOnDestroy(): void {
//     // this.customersSub.unsubscribe();
//   }

// }

import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  private destroyed$ = new Subject<boolean>();
  id: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.customersSub
      .pipe(takeUntil(this.destroyed$))
      .subscribe(response => {
      this.customers = response;
      console.log(this.customers[0].id);
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
