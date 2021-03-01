import { ApiService } from '../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  customersSub: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.customersSub = this.apiService.customersSub.subscribe(response => {
      this.customers = response;
    })
  }

  ngOnDestroy(): void {
    this.customersSub.unsubscribe();
  }




}
