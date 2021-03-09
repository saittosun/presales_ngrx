import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// import { LeadService } from "./lead-store/lead.service";
// import { LeadEffect } from "./lead-store/lead.effect";
// import { LeadReducer } from "./lead-store/lead.reducer";
// import { LeadFacade } from "./lead-store/lead.facade";

@NgModule({
  imports: [
    // CommonModule,
    // StoreModule.forFeature("leads", LeadReducer),
    // EffectsModule.forFeature([LeadEffect])
  ],
  // providers: [LeadEffect, LeadService, LeadFacade]
})
export class DashboardModule {}
