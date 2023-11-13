import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import {UniversiteListeComponent} from "./core/universite/universite-liste/universite-liste.component";
import {UniversiteDetailComponent} from "./core/universite/universite-detail/universite-detail.component";
import { AddBlocComponent } from './core/Bloc/Add bloc/add-bloc.component';
import {ListBlocComponent} from "./core/Bloc/list-bloc/list-bloc.component";
import {UpdateBlocComponent} from "./core/Bloc/update-bloc/update-bloc.component";

const routes: Routes = [
  {path:"reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  //Universite Route
  {path:"universite",component:UniversiteListeComponent},
  {path:"universite/:id",component:UniversiteDetailComponent},
  //bloc Route
  {path:"addBloc",component:AddBlocComponent},
  {path:"listBloc",component:ListBlocComponent},
  {path:"updateBloc",component:UpdateBlocComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
