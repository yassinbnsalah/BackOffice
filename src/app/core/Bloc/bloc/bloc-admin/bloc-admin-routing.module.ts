import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlocComponent } from '../../list-bloc/list-bloc.component';
import { DetailBlocComponent } from '../../detail-bloc/detail-bloc.component';

const routes: Routes = [
  {
    path:"",component:ListBlocComponent,
  },
  
  {
    path:"detailBloc",component:DetailBlocComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocAdminRoutingModule { }
