import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListeComponent } from './core/reservation-liste/reservation-liste.component';
import { FoyerlisteComponent } from './core/foyerliste/foyerliste.component';
import { DetailsfoyerComponent } from './core/detailsfoyer/detailsfoyer.component';
import { UpdatefoyerComponent } from './core/updatefoyer/updatefoyer.component';
import { AddfoyerComponent } from './core/addfoyer/addfoyer.component';

const routes: Routes = [
  {path:"addFoyerr" , component:AddfoyerComponent},
  {path:"reservation" , component:ReservationListeComponent},
  {path:"foyer",component:FoyerlisteComponent},
  {path:"foyer/:id" , component:DetailsfoyerComponent},

  {path:"foyer/update/:id" , component:UpdatefoyerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
