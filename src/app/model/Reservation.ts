import { Etudiant } from "./Etudiant";
import { User } from "./User";

export class Reservation {
    idReservation!: string; 
    anneeReservation!: string ;
    dateDebut!: string ;
    dateFin !: string; 
    estValide!: boolean ;
    status !: string ; 
    etudiants !: User[] ;
}