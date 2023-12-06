import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/Reservation/reservation-liste/reservation-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsfoyerComponent } from './core/foyer/detailsfoyer/detailsfoyer.component';
import { AddfoyerComponent } from './core/foyer/addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './core/foyer/updatefoyer/updatefoyer.component';
import { FormsModule } from '@angular/forms';
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
import { AgentUniListeComponent } from './core/users/agent-uni-liste/agent-uni-liste.component';
import { EtudiantListeComponent } from './core/users/etudiant-liste/etudiant-liste.component';
import { UniversiteUpdateComponent } from './core/universite/universite-update/universite-update.component';
import { SideComponent } from './shared/side/side.component';
import { AddReservationComponent } from './core/Reservation/add-reservation/add-reservation.component';
import { FoyerlisteComponent } from './core/foyer/foyerliste/foyerliste.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { AddBlocComponent } from './core/bloc/add-bloc/add-bloc.component';
import { ListBlocComponent } from './core/bloc/list-bloc/list-bloc.component';
import { UpdateBlocComponent } from './core/bloc/update-bloc/update-bloc.component';
import { StepperTestComponent } from './core/stepper-test/stepper-test.component';
import { AcceptedUniversiteComponent } from './core/universite/accepted-universite/accepted-universite.component';
import { DemandeListeComponent } from './core/demande-liste/demande-liste.component';
import { DetailBlocComponent } from './core/bloc/detail-bloc/detail-bloc.component';
import { BlocModule } from './core/bloc/bloc/bloc.module';
import { BlocAdminModule } from './core/bloc/bloc/bloc-admin/bloc-admin.module';
import { ListeAgentComponent } from './core/universite/agent-liste/liste-agent/liste-agent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from "@angular/material/paginator";
import { PaginatComponent } from './shared/pagi/paginat/paginat.component';
import { ChangePasswordComponent } from './core/ProfilePages/change-password/change-password.component';
import { MyProfileComponent } from './core/ProfilePages/my-profile/my-profile.component';
import { ProfileComponent } from './core/ProfilePages/profile/profile.component';
import { EmailChangePasswordComponent } from './core/users/email-change-password/email-change-password.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material-module';
import {  ModifyMyProfileComponent } from './core/ProfilePages/modify-my-profile/modify-my-profile.component';
import { PopupComponent } from './shared/popup/popup.component';

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
    AgentUniListeComponent,
    EtudiantListeComponent,
    UniversiteUpdateComponent,
    SideComponent,
    DetailsfoyerComponent,
    AddfoyerComponent,
    UpdatefoyerComponent,
    AddReservationComponent,
    FoyerlisteComponent,
    ErrorMessageComponent,
    DemandeListeComponent,
    AcceptedUniversiteComponent,
    StepperTestComponent,
    AddBlocComponent,
    ListBlocComponent,
    UpdateBlocComponent,
    StepperTestComponent,
    AcceptedUniversiteComponent,
    UniversiteUpdateComponent ,
    DetailBlocComponent,
    ErrorMessageComponent,
    NotfoundComponent,
    ListeAgentComponent,
    PaginatComponent,
    DemandeListeComponent,
    ChangePasswordComponent,
    ModifyMyProfileComponent,
    MyProfileComponent,
    ProfileComponent,
    EmailChangePasswordComponent,
    ConfirmationDialogComponent,
    PopupComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BlocModule,
    BlocAdminModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
