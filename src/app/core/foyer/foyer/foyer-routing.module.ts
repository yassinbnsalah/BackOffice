import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerlisteComponent } from '../foyerliste/foyerliste.component';
import { AddfoyerComponent } from '../addfoyer/addfoyer.component';
import { DetailsfoyerComponent } from '../detailsfoyer/detailsfoyer.component';
import { UpdatefoyerComponent } from '../updatefoyer/updatefoyer.component';
import { LoaderResolver } from '../../Data-resolver/loader.resolver';

const routes: Routes = [
  {path:"",component:FoyerlisteComponent,
  resolve: {
    data: LoaderResolver
  }},
  {path:"addFoyer" , component:AddfoyerComponent},
  {path:":id" , component:DetailsfoyerComponent},
  {path:"update/:id" , component:UpdatefoyerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
 