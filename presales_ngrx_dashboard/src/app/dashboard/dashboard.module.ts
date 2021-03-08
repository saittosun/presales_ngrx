import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { leadReducers } from "./store/dashboard.reducer";
// import { LeadEffects } from "./store/dashboard.effect";
import { LeadService } from "./services/lead.service";
// import { LeadsFacade } from "./facades/dashboard.facade";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("leads", leadReducers),
    // EffectsModule.forFeature([LeadEffects])
  ],
  // providers: [LeadEffects, LeadService, LeadsFacade]
})
export class DashboardModule {}
