
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerlisteComponent } from './core/foyer/foyerliste/foyerliste.component';
import { AddfoyerComponent } from './core/foyer/addfoyer/addfoyer.component';
import { DetailsfoyerComponent } from './core/foyer/detailsfoyer/detailsfoyer.component';
import { UpdatefoyerComponent } from './core/foyer/updatefoyer/updatefoyer.component';

const routes: Routes = [
  // Foyer Route 
  { path: "admin/foyer", component: FoyerlisteComponent },
  { path: "admin/foyer/addFoyer", component: AddfoyerComponent },
  { path: "admin/foyer/:id", component: DetailsfoyerComponent },
  { path: "admin/foyer/update/:id", component: UpdatefoyerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
