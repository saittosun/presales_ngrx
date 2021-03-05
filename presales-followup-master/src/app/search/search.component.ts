
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { Api } from '../models/api';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  readonly customers = new Api().customers;
  searchfilter: FormControl;
  private onChange: (val: string) => void;

  constructor(private apiService: ApiService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchfilter = this.fb.control(null);
    this.searchfilter.valueChanges
      .subscribe(value => {
        this.changeList(value)
      })
  }

  changeList(val: string): void {
    if (val === null || val === '') {
      this.apiService.updateCustomer(this.customers);
      return;
    }
    const customers = this.customers.filter(customer => {
      return customer.customerName.toLowerCase().includes(val.toLowerCase()) || customer.projectName.toLowerCase().includes(val.toLowerCase())
    })
    this.apiService.updateCustomer(customers);
  }
}

