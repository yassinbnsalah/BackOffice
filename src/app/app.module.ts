import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/Reservation/reservation-liste/reservation-liste.component';

import { DetailsfoyerComponent } from './core/foyer/detailsfoyer/detailsfoyer.component';
import { AddfoyerComponent } from './core/foyer/addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './core/foyer/updatefoyer/updatefoyer.component';
import { ReservationDetailsComponent } from './core/Reservation/reservation-details/reservation-details.component';
import { UniversiteDetailComponent } from './core/universite/universite-detail/universite-detail.component';
import { UniversiteListeComponent } from './core/universite/universite-liste/universite-liste.component';

import { LoginComponent } from './core/login/login.component';
import { ForgetPasswordComponent } from './core/forget-password/forget-password.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { ChamberListeComponent } from './core/chamber/chamber-liste/chamber-liste.component';
import { ChamberDetailsComponent } from './core/chamber/chamber-details/chamber-details.component';
import { ChamberAddComponent } from './core/chamber/chamber-add/chamber-add.component';
import { ChamberUpdateComponent } from './core/chamber/chamber-update/chamber-update.component';


import { BlocListeComponent } from './core/bloc/bloc-liste/bloc-liste.component';
import { AgentUniListeComponent } from './core/users/agent-uni-liste/agent-uni-liste.component';
import { EtudiantListeComponent } from './core/users/etudiant-liste/etudiant-liste.component';
import { UniversiteUpdateComponent } from './core/universite/universite-update/universite-update.component';
import { SideComponent } from './shared/side/side.component';
import { AddReservationComponent } from './core/Reservation/add-reservation/add-reservation.component';
import { FoyerlisteComponent } from './core/foyer/foyerliste/foyerliste.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    AddReservationComponent,
    FoyerlisteComponent,
    ErrorMessageComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
