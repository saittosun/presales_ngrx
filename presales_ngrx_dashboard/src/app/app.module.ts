import { LeadService } from './dashboard/lead-store/lead.service';
import { reducers } from './dashboard/lead-store/lead.selector';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchComponent } from '../app/search/search.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import { LeadEffect } from './dashboard/lead-store/lead.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatSelectModule} from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LeadsComponent,
    CustomersComponent,
    SearchComponent,
    NotFoundComponent,
    DropdownDirective,
    CustomerDetailComponent,
    LeadDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LeadEffect]),
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    DashboardModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
