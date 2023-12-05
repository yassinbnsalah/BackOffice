
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { PopupComponent } from 'src/app/shared/popup/popup.component';

@Component({
  selector: 'app-etudiant-liste',
  templateUrl: './etudiant-liste.component.html',
  styleUrls: ['./etudiant-liste.component.css']
})
export class EtudiantListeComponent {
  users: User[] = [];
  selectedOption: string = 'All';
  searchValue: string = '';

  constructor(private userService: UserService,private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        if (this.selectedOption === 'All') {
          this.users = data;
        } else if (this.selectedOption === 'Etudiants') {
          this.users = data.filter(user => user.role === "ETUDIANT");
        }else{
          this.users = data.filter(user => user.role === "AGENTUNIVERSITE");
        }
        console.log(this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  onOptionChange() {
    console.log(this.selectedOption)
     this.fetchUsers();
  }

  toggleUserAction(email: string) {
    this.userService.toggleUser(email).subscribe(
      () => {
        const userToUpdate = this.users.find(user => user.email === email);
        if (userToUpdate) {
          userToUpdate.enabled = !userToUpdate.enabled;
        }
      },
      (error) => {
        console.error('Error toggling user:', error);
      }
    );
  }

  search() {
    const searchTerm = this.searchValue.toLowerCase();

    if (searchTerm === '') {
      this.fetchUsers();
    } else {
      if (this.selectedOption === 'All') {
        this.users = this.filterUsers(this.users, searchTerm);
      } else if (this.selectedOption === 'Etudiants') {
        this.users = this.filterUsers(this.users.filter(user => user.role === 'ETUDIANT'), searchTerm);
      } else {
        this.users = this.filterUsers(this.users.filter(user => user.role === 'AGENTUNIVERSITE'), searchTerm);
      }
      console.log(this.users);
    }
  }


  filterUsers(users: User[], searchTerm: string): User[] {
    return users.filter(user => {
      return (
        user.cin === Number(searchTerm)||
        user.nomEt.toLowerCase().includes(searchTerm) ||
        user.prenomEt.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.dateNaissance.toLowerCase().includes(searchTerm)
      );
    });
  }
  openConfirmationDialog(userEmail: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        email: userEmail,
        title: 'Confirmation',
        message: 'Are you sure you want to toggle this user?',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      result ? this.toggleUserAction(userEmail) : console.log('User canceled.');
    });
  }

  openPopUp(user: any){
    this.dialog.open(PopupComponent,{
        width:'60%',
        height:'540px',
      data: { user }
    })
  }
}
