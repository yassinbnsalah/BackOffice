import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { ChamberListeComponent } from './core/chamber-liste/chamber-liste/chamber-liste.component';
import { ChamberDetailsComponent } from './core/chamber-details/chamber-details/chamber-details.component';
import { ChamberAddComponent } from './core/chambre-add/chamber-add/chamber-add.component';
import { ChamberUpdateComponent } from './core/chamber-update/chamber-update/chamber-update.component';

const routes: Routes = [
  {path:"reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  {path:"chamber" , component:ChamberListeComponent},
  {path:"chamber/:id" , component:ChamberDetailsComponent},
  {path: "addchamber", component: ChamberAddComponent },

  { path: "chamber/update/:id", component: ChamberUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
