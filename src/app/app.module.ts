import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailsfoyerComponent } from './core/foyer/detailsfoyer/detailsfoyer.component';
import { AddfoyerComponent } from './core/foyer/addfoyer/addfoyer.component';
import { UpdatefoyerComponent } from './core/foyer/updatefoyer/updatefoyer.component';


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
    DetailsfoyerComponent,
    AddfoyerComponent,
    UpdatefoyerComponent,
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
