import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamberListeComponent } from '../chamber-liste/chamber-liste.component';
import { ChamberAddComponent } from '../chamber-add/chamber-add.component';
import { ChamberDetailsComponent } from '../chamber-details/chamber-details.component';
import { ChamberUpdateComponent } from '../chamber-update/chamber-update.component';
import { UniversiteDetailComponent } from '../../universite/universite-detail/universite-detail.component';

const routes: Routes = [
  { path: "", component: ChamberListeComponent },
  { path: "add", component: ChamberAddComponent },
  { path: ":id", component: ChamberDetailsComponent },
  { path: "update/:id", component: ChamberUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamberRoutingModule { }
