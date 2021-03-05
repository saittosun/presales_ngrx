import { LeadDetailComponent } from './leads/lead-detail/lead-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { LeadsComponent } from './leads/leads.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { NewLeadFormComponent } from './leads/new-lead-form/new-lead-form.component';
import { NewCustomerFormComponent } from './customers/new-customer-form/new-customer-form.component';

const routes: Routes = [
  { path: 'leads', component: LeadsComponent },
  { path: 'leads/new-lead-form', component: NewLeadFormComponent },
  { path: 'leads/:id', component: LeadDetailComponent },
  { path: 'leads/edit', component: LeadDetailComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new-customer-form', component: NewCustomerFormComponent},
  { path: 'customers/:id', component: CustomerDetailComponent},
  { path: 'customers/edit', component: CustomerDetailComponent},
  { path: '', component: DashboardComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
