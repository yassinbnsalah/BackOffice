
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



const routes: Routes = [
  //reservation Route 
  {path:"admin/reservation" , component:ReservationListeComponent},
  {path:"admin/reservation/:id" , component:ReservationDetailsComponent},

  {path:":universite/reservation" , component:ReservationListeComponent},
  {path:":universite/reservation/add" , component:AddReservationComponent},
  {path:":universite/reservation/:id" , component:ReservationDetailsComponent},



  
  // Foyer Route 
  {path:"admin/foyer" , component:FoyerlisteComponent },
  {path:":universite/foyer" , component:FoyerlisteComponent},
  {path:":universite/addFoyer" , component:AddfoyerComponent},
  {path:":universite/foyer/:id" , component:DetailsfoyerComponent},
  {path:":universite/foyer/update/:id" , component:UpdatefoyerComponent},
  // User Route 
  {path:"admin/agentuniliste" , component:AgentUniListeComponent},
  {path:"admin/etudiantliste" , component:EtudiantListeComponent},
  // Login URLS 
  {path:"login" , component:LoginComponent},
  {path:"forgetpassword" , component:ForgetPasswordComponent},
  // chamber URLS 
 
  {path:":universite/chamber" , component:ChamberListeComponent},
  {path:":universite/chamber/add", component: ChamberAddComponent },
  {path:":universite/chamber/:id" , component:ChamberDetailsComponent},
  {path:":universite/chamber/update/:id", component: ChamberUpdateComponent },
  //{path:"universite",component:UniversiteListeComponent},
  {path:"universite-details/:id", component: UniversiteDetailComponent },


  //Universite Route
  {path:":universite" , component:UniversiteUpdateComponent},
  {path:"admin/universite",component:UniversiteListeComponent},
  {path:"admin/universite/:id",component:UniversiteDetailComponent},

  //bloc Route
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
