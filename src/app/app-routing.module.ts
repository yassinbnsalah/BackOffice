import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import {UniversiteListeComponent} from "./core/universite/universite-liste/universite-liste.component";
import {UniversiteDetailComponent} from "./core/universite/universite-detail/universite-detail.component";
import { LoginComponent } from './core/login/login.component';
import { ForgetPasswordComponent } from './core/forget-password/forget-password.component';

const routes: Routes = [
  {path:"reservation" , component:ReservationListeComponent},
  {path:"admin/reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  {path:"admin/reservation/:id" , component:ReservationDetailsComponent},
  //Universite Route
  {path:"admin/universite",component:UniversiteListeComponent},
  {path:"admin/universite/:id",component:UniversiteDetailComponent},

  {path:"login" , component:LoginComponent},
  {path:"forgetpassword" , component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
