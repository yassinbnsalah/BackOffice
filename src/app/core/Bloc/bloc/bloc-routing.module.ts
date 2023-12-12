import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlocComponent } from '../list-bloc/list-bloc.component';
import { UpdateBlocComponent } from '../update-bloc/update-bloc.component';
import { DetailBlocComponent } from '../detail-bloc/detail-bloc.component';
import { AddBlocComponent } from '../add-bloc/add-bloc.component';
import { LoaderResolver } from '../../Data-resolver/loader.resolver';

const routes: Routes = [
  {
    path:"",component:ListBlocComponent,
    resolve: {
      data: LoaderResolver
    }
  },
  {
    path:"add",component:AddBlocComponent,
  },
  {
    path:"updateBloc",component:UpdateBlocComponent
  },
  {
    path:"detailBloc",component:DetailBlocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
