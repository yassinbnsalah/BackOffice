import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteListeComponent } from "../universite-liste/universite-liste.component";
import { AcceptedUniversiteComponent } from "../accepted-universite/accepted-universite.component";
import { UniversiteUpdateComponent } from "../universite-update/universite-update.component";
import { UniversiteDetailComponent } from "../universite-detail/universite-detail.component";
import { LoaderResolver } from '../../Data-resolver/loader.resolver';


const routes: Routes = [
  {
    path: "", component: UniversiteListeComponent,
    resolve: {
      data: LoaderResolver
    }
  },
  {
    path: "information", component: UniversiteDetailComponent,
    resolve: {
      data: LoaderResolver
    }
  },
  {
    path: "acceptedUniversite", component: AcceptedUniversiteComponent,

  },

  {
    path: "updateUniversite/:id", component: UniversiteUpdateComponent,

  },

  {
    path: ":universite", component: UniversiteDetailComponent,

  },

];
// 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitesRoutingModule { }
