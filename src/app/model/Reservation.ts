import { Etudiant } from "./Etudiant";

export class Reservation {
    idReservation!: string; 
    anneeReservation!: string ;
    estValide!: boolean ;
    etu !: Etudiant[] ;
}