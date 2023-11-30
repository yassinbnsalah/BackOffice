import { Etudiant } from "./Etudiant";

export class Reservation {
    idReservation!: string; 
    anneeReservation!: string ;
    dateDebut!: string ;
    dateFin !: string; 
    estValide!: boolean ;
    status !: string ; 
    etudiants !: Etudiant[] ;
}