import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import {UniversiteListeComponent} from "./core/universite/universite-liste/universite-liste.component";
import {UniversiteDetailComponent} from "./core/universite/universite-detail/universite-detail.component";

const routes: Routes = [
  {path:"reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  //Universite Route
  {path:"universite",component:UniversiteListeComponent},
  {path:"universite/:id",component:UniversiteDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
