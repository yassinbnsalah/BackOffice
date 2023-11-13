
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/Reservation/reservation-liste/reservation-liste.component';
import { DetailsfoyerComponent } from './core/detailsfoyer/detailsfoyer.component';
import { UpdatefoyerComponent } from './core/updatefoyer/updatefoyer.component';
import { AddfoyerComponent } from './core/addfoyer/addfoyer.component';
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
import { FoyerlisteComponent } from './core/foyerliste/foyerliste.component';

const routes: Routes = [
  //reservation Route 
  {path:"reservation" , component:ReservationListeComponent},
  {path:"admin/reservation" , component:ReservationListeComponent},
  {path:"reservation/:id" , component:ReservationDetailsComponent},
  {path:"admin/reservation/:id" , component:ReservationDetailsComponent},
  //Universite Route
  {path:"universite" , component:UniversiteUpdateComponent},
  {path:"admin/universite",component:UniversiteListeComponent},
  {path:"admin/universite/:id",component:UniversiteDetailComponent},
  // Foyer Route 
  {path:"admin/foyer" , component:FoyerlisteComponent },
  {path:"foyer" , component:FoyerlisteComponent},
  {path:"foyer/:id" , component:DetailsfoyerComponent},
  {path:"foyer/update/:id" , component:UpdatefoyerComponent},
  // User Route 
  {path:"admin/agentuniliste" , component:AgentUniListeComponent},
  {path:"admin/etudiantliste" , component:EtudiantListeComponent},
  // Login URLS 
  {path:"login" , component:LoginComponent},
  {path:"forgetpassword" , component:ForgetPasswordComponent},
  // chamber URLS 
  {path:"chamber" , component:ChamberListeComponent},
  {path:"chamber/add", component: ChamberAddComponent },
  {path:"chamber/:id" , component:ChamberDetailsComponent},
  {path:"chamber/update/:id", component: ChamberUpdateComponent },
  //{path:"universite",component:UniversiteListeComponent},
  { path: 'universite-details/:id', component: UniversiteDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
