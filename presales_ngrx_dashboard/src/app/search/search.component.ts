import { Api } from '../models/api';
import { ApiService } from '../core/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filteredStatus: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }


  filterChange(event: string) {
    console.log(event);
    let customers = new Api().customers;
    console.log(customers)

    if(event === null || event === '') {
      this.apiService.updateCustomer(customers);
      return;
    }
    customers = customers.filter(customer => {
      return customer.customerName.toLowerCase().includes(event.toLowerCase()) || customer.projectName.toLowerCase().includes(event.toLowerCase())
    })

    this.apiService.updateCustomer(customers);
  }





}
