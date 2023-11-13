import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { UniversiteDetailComponent } from './core/universite/universite-detail/universite-detail.component';
import { UniversiteListeComponent } from './core/universite/universite-liste/universite-liste.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddBlocComponent } from './core/Bloc/Add bloc/add-bloc.component';
import { ListBlocComponent } from './core/Bloc/list-bloc/list-bloc.component';
import { UpdateBlocComponent } from './core/Bloc/update-bloc/update-bloc.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ReservationListeComponent,
    ReservationDetailsComponent,
    UniversiteDetailComponent,
    UniversiteListeComponent,
    AddBlocComponent,
    ListBlocComponent,
    UpdateBlocComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
