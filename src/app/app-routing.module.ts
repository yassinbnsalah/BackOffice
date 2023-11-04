import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';

const routes: Routes = [
  {path:"reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
