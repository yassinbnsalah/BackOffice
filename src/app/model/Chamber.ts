import { Bloc } from "./Bloc";
import { Reservation } from "./Reservation";

export class Chamber{
    idChamber!:number;
    numerochamber!:number;
    typeC!:string;
    description!:string;
    etat!:boolean;
    CreatedAt!:Date;
    UpdatedAt!:Date;
    reservation!:Reservation[];
    bloc!:Bloc;
    

}