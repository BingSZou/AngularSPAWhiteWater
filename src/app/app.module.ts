import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MenuModule } from "./menu/menu.module";
import { TitleComponent } from "./title/title.component";
import { AppRoutingModule } from "./app-routing.module";
import { RaftGuideComponent } from "./raft-guide/raft-guide.component";
import { LocationsComponent } from "./locations/locations.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RaftGuideDetailComponent } from "./raft-guide-detail/raft-guide-detail.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LocationSummaryCardComponent } from './location-summary-card/location-summary-card.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    RaftGuideComponent,
    LocationsComponent,
    DashboardComponent,
    RaftGuideDetailComponent,
    LocationSummaryCardComponent,
    SpecialOffersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    // HttpClientModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
