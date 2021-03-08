import { ApiService } from '../../core/services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Country } from 'src/app/models/country';
import { Countries } from 'src/app/models/countries';

@Component({
  selector: 'app-new-lead-form',
  templateUrl: './new-lead-form.component.html',
  styleUrls: ['./new-lead-form.component.scss']
})
export class NewLeadFormComponent implements OnInit, OnDestroy {

  leadForm: FormGroup;
  customers: Customer[] = [];
  countries: Country [] = new Countries().countries;
  submitted: boolean = false;
  private destroyed$ = new Subject<boolean>();

  constructor(private apiService: ApiService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.apiService.customersSub
      .pipe(takeUntil(this.destroyed$))
      .subscribe(response => {
        this.customers = response;
    })
  }

  private createForm() {
    this.leadForm = this.fb.group({
      customername: new FormControl('', Validators.required),
      addressline1: new FormControl('', Validators.required),
      addressline2: new FormControl(''),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      vat: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10)
      ]),
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmit() {
    this.submitted = true;
    if (this.leadForm.invalid) {
      return;
    };
    this.leadForm.reset()
    this.submitted = false;
  }

}
