import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LocationsComponent } from "./locations/locations.component";
import { RaftGuideComponent } from "./raft-guide/raft-guide.component";
import { RaftGuideDetailComponent } from "./raft-guide-detail/raft-guide-detail.component";
import { SpecialOffersComponent } from "./special-offers/special-offers.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "locations", component: LocationsComponent },
  { path: "raft-guides", component: RaftGuideComponent },
  { path: "raft-guides/:id", component: RaftGuideDetailComponent },
  { path: "special-offers", component: SpecialOffersComponent },
  { path: "", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
