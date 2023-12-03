import { ReservationModule } from './core/Reservation/reservation/reservation.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/Reservation/reservation-liste/reservation-liste.component';
import { DetailsfoyerComponent } from './core/foyer/detailsfoyer/detailsfoyer.component';
import { UpdatefoyerComponent } from './core/foyer/updatefoyer/updatefoyer.component';
import { AddfoyerComponent } from './core/foyer/addfoyer/addfoyer.component';
import { ReservationDetailsComponent } from './core/Reservation/reservation-details/reservation-details.component';
import { UniversiteListeComponent } from "./core/universite/universite-liste/universite-liste.component";
import { UniversiteDetailComponent } from "./core/universite/universite-detail/universite-detail.component";
import { LoginComponent } from './core/login/login.component';
import { ForgetPasswordComponent } from './core/forget-password/forget-password.component';
//import { ChamberListeComponent } from './core/chamber/chamber-liste/chamber-liste.component';
import { ChamberDetailsComponent } from './core/chamber/chamber-details/chamber-details.component';
import { ChamberAddComponent } from './core/chamber/chamber-add/chamber-add.component';
import { ChamberUpdateComponent } from './core/chamber/chamber-update/chamber-update.component';
import { AgentUniListeComponent } from './core/users/agent-uni-liste/agent-uni-liste.component';
import { EtudiantListeComponent } from './core/users/etudiant-liste/etudiant-liste.component';
import { ChamberListeComponent } from './core/chamber/chamber-liste/chamber-liste.component';
import { UniversiteUpdateComponent } from './core/universite/universite-update/universite-update.component';
import { FoyerlisteComponent } from './core/foyer/foyerliste/foyerliste.component';
import { AddReservationComponent } from './core/Reservation/add-reservation/add-reservation.component';

import { LoaderResolver } from './core/Data-resolver/loader.resolver';
import { StepperTestComponent } from './core/stepper-test/stepper-test.component';
import { AcceptedUniversiteComponent } from "./core/universite/accepted-universite/accepted-universite.component";
import { DemandeListeComponent } from './core/demande-liste/demande-liste.component';


import { DetailBlocComponent } from './core/Bloc/detail-bloc/detail-bloc.component';
import { AddBlocComponent } from './core/Bloc/add-bloc/add-bloc.component';
import { ListBlocComponent } from './core/Bloc/list-bloc/list-bloc.component';
import { UpdateBlocComponent } from './core/Bloc/update-bloc/update-bloc.component';



const routes: Routes = [
  //reservation Route 
  { path: "test", component: StepperTestComponent },
  {
    path: "admin/reservation", loadChildren:()=>
    import('./core/Reservation/reservation/reservation.module').then(m=>m.ReservationModule)
  },
  {
    path: ":universite/reservation", loadChildren:()=>
    import('./core/Reservation/reservation/reservation.module').then(m=>m.ReservationModule)
  },

  {
    path: ":universite/reservation", component: ReservationListeComponent,
    resolve: {
      data: LoaderResolver
    }
  },
  {
    path: ":universite/reservation/add", component: AddReservationComponent,
    resolve: {
      data: LoaderResolver
    }
  },
  {
    path: ":universite/reservation/:id", component: ReservationDetailsComponent,
    resolve: {
      data: LoaderResolver
    }
  },


  { path: ":universite/demande", component: DemandeListeComponent },
  //bloc Route

  { path: ":universite/addBloc", component: AddBlocComponent   },
  { path: ":universite/bloc", component: ListBlocComponent },
  { path: "updateBloc", component: UpdateBlocComponent },
  { path: "detailBloc", component: DetailBlocComponent },

  // Foyer Route 
  { path: "admin/foyer", component: FoyerlisteComponent },
  { path: ":universite/foyer", component: FoyerlisteComponent },
  { path: ":universite/addFoyer", component: AddfoyerComponent },
  { path: ":universite/foyer/:id", component: DetailsfoyerComponent },
  { path: ":universite/foyer/update/:id", component: UpdatefoyerComponent },
  // User Route 
  { path: "admin/agentuniliste", component: AgentUniListeComponent },
  { path: "admin/etudiantliste", component: EtudiantListeComponent },
  // Login URLS 
  { path: "login", component: LoginComponent },
  { path: "forgetpassword", component: ForgetPasswordComponent },
  // chamber URLS 
  { path: ":universite/chamber", component: ChamberListeComponent },
  { path: ":universite/chamber/add", component: ChamberAddComponent },
  { path: ":universite/chamber/:id", component: ChamberDetailsComponent },
  { path: ":universite/chamber/update/:id", component: ChamberUpdateComponent },
  //{path:"universite",component:UniversiteListeComponent},
  { path: "universite-details/:id", component: UniversiteDetailComponent },


  //Universite Route
  { path: ":universite/information", component: UniversiteDetailComponent },
  { path: ":universite", component: UniversiteUpdateComponent },
  { path: "admin/universite", component: UniversiteListeComponent },
  { path: "admin/universite/:universite", component: UniversiteDetailComponent },
  { path: "admin/acceptedUniversite", component: AcceptedUniversiteComponent },
  { path: "admin/updateUniversite/:id", component: UniversiteUpdateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }