import { ReservationListeComponent } from './../reservation-liste/reservation-liste.component';
import { LoaderResolver } from './../../Data-resolver/loader.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDetailsComponent } from '../reservation-details/reservation-details.component';
import { AddReservationComponent } from '../add-reservation/add-reservation.component';


const routes: Routes = [
  {
    path: "", component: ReservationListeComponent,
      resolve: {
        data: LoaderResolver
        }
  },
 
  {
    path:"add", component: AddReservationComponent,
    resolve: {
      data: LoaderResolver
    }
  },

  {
    path:":id", component: ReservationDetailsComponent,
    resolve: {
      data: LoaderResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
