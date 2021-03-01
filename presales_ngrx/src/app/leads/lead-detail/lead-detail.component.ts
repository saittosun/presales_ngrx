import { ApiService } from '../../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit, OnDestroy {
  leadForm: FormGroup;
  customers: Customer[] = [];
  customersSub: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.leadForm = new FormGroup({
      'customername': new FormControl(null, Validators.required),
      'addressline1': new FormControl(null, Validators.required),
      'addressline2': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
      'vat': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'tel': new FormControl(null, Validators.required),
    })

    this.customersSub = this.apiService.customersSub.subscribe(response => {
      this.customers = response;
      console.log(response)
    })
  }

  ngOnDestroy(): void {
    this.customersSub.unsubscribe();
  }

  onSubmit() {
    console.log(this.leadForm);
  }

}
