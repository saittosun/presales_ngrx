import { ApiService } from '../../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Country } from 'src/app/models/country';
import { Countries } from 'src/app/models/countries';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.scss']
})
export class LeadDetailComponent implements OnInit, OnDestroy {
  leadForm: FormGroup;
  customers: Customer[] = [];
  customersSub: Subscription;
  countries: Country [] = new Countries().countries;
  submitted:boolean=false;

  constructor(private apiService: ApiService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.leadForm = this.fb.group({
      'customername': this.fb.control(null, Validators.required),
      'addressline1': this.fb.control(null, Validators.required),
      'addressline2': this.fb.control(null, Validators.required),
      'country': this.fb.control(null, Validators.required),
      'city': this.fb.control(null, Validators.required),
      'state': this.fb.control(null, Validators.required),
      'zip': this.fb.control(null, Validators.required),
      'vat': this.fb.control(null, Validators.required),
      'firstname': this.fb.control(null, Validators.required),
      'lastname': this.fb.control(null, Validators.required),
      'email': this.fb.control(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      'tel': this.fb.control(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)
      ]),
    })

    this.customersSub = this.apiService.customersSub.subscribe(response => {
      this.customers = response;
      console.log(response)
    })
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnDestroy(): void {
    this.customersSub.unsubscribe();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.leadForm.value);
    this.leadForm.reset()
    this.submitted = false;
  }

}
