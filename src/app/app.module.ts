import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationDetailsComponent } from './core/reservation-details/reservation-details.component';
import { ChamberListeComponent } from './core/chamber-liste/chamber-liste/chamber-liste.component';
import { ChamberDetailsComponent } from './core/chamber-details/chamber-details/chamber-details.component';
import { ChamberAddComponent } from './core/chambre-add/chamber-add/chamber-add.component';
import { ChamberUpdateComponent } from './core/chamber-update/chamber-update/chamber-update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ReservationListeComponent,
    ReservationDetailsComponent,
    ChamberListeComponent,
    ChamberDetailsComponent,
    ChamberAddComponent,
    ChamberUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
