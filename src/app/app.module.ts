import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsfoyerComponent } from './core/detailsfoyer/detailsfoyer.component';
import { AddfoyerComponent } from './core/addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './core/updatefoyer/updatefoyer.component';
import { FormsModule } from '@angular/forms';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { UniversiteDetailComponent } from './core/universite/universite-detail/universite-detail.component';
import { UniversiteListeComponent } from './core/universite/universite-liste/universite-liste.component';

import { LoginComponent } from './core/login/login.component';
import { ForgetPasswordComponent } from './core/forget-password/forget-password.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { ChamberListeComponent } from './core/chamber-liste/chamber-liste/chamber-liste.component';
import { ChamberDetailsComponent } from './core/chamber-details/chamber-details/chamber-details.component';
import { ChamberAddComponent } from './core/chambre-add/chamber-add/chamber-add.component';
import { ChamberUpdateComponent } from './core/chamber-update/chamber-update/chamber-update.component';


import { BlocListeComponent } from './core/bloc/bloc-liste/bloc-liste.component';
import { AgentUniListeComponent } from './core/users/agent-uni-liste/agent-uni-liste.component';
import { EtudiantListeComponent } from './core/users/etudiant-liste/etudiant-liste.component';
import { UniversiteUpdateComponent } from './core/universite/universite-update/universite-update.component';
import { SideComponent } from './shared/side/side.component';
import { FoyerlisteComponent } from './core/foyerliste/foyerliste.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ReservationListeComponent,
    ReservationDetailsComponent,
    UniversiteDetailComponent,
    UniversiteListeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SidebarAdminComponent,
    ChamberListeComponent,
    ChamberDetailsComponent,
    ChamberAddComponent,
    ChamberUpdateComponent,
    BlocListeComponent,
    AgentUniListeComponent,
    EtudiantListeComponent,
    UniversiteUpdateComponent,
    SideComponent,
    DetailsfoyerComponent,
    AddfoyerComponent,
    UpdatefoyerComponent,
    FoyerlisteComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
