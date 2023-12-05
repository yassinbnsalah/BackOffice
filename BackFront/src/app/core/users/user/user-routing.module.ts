import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantListeComponent} from "../Etudiants/etudiant-liste/etudiant-liste.component";
import {ForgetPasswordComponent} from "../../forget-password/forget-password.component";
import {ModifiyMyProfileComponent} from "../../ProfilePages/modifiy-my-profile/modifiy-my-profile.component";
import {ChangePasswordComponent} from "../../ProfilePages/change-password/change-password.component";
import {ProfileComponent} from "../../ProfilePages/profile/profile.component";
import {LoginComponent} from "../../login/login.component";
import {MyprofileComponent} from "../../ProfilePages/myprofile/myprofile.component";
import {ConfirmationDialogComponent} from "../../../shared/confirmation-dialog/confirmation-dialog.component";
import {EmailChangePasswordComponent} from "../email-change-password/email-change-password.component";


// {path:"admin/etudiantliste" , component:EtudiantListeComponent},
// // Login URLS
// {path:"login" , component:LoginComponent},
// {path:"forgetpassword",component:ForgetPasswordComponent},
// {path:"reset-password/:email",component:EmailChangePasswordComponent},

const routes: Routes = [
  {path:"/login",component:LoginComponent},
  {path:"/etudiantliste",component:EtudiantListeComponent},
  {path:"/forgetpassword",component:ForgetPasswordComponent},
  {path:"/reset-password/:email",component:ConfirmationDialogComponent},

  {path:"/Modif",component:ModifiyMyProfileComponent},
  {path:"/changePassword",component:ChangePasswordComponent},
  {path:"/profileCoponent",component:ProfileComponent},
  {path:"/LoginComponent",component:LoginComponent},
  {path:"/MyProfile",component:MyprofileComponent},
  {path:"/Confirm",component:ConfirmationDialogComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
