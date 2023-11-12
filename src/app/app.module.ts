import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { HttpClientModule } from '@angular/common/http';
import { FoyerlisteComponent } from './core/foyerliste/foyerliste.component';
import { DetailsfoyerComponent } from './core/detailsfoyer/detailsfoyer.component';
import { AddfoyerComponent } from './core/addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './core/updatefoyer/updatefoyer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ReservationListeComponent,
    FoyerlisteComponent,
    DetailsfoyerComponent,
    AddfoyerComponent,
    UpdatefoyerComponent
    
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
