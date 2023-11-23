import { Bloc } from "./Bloc";
import { Reservation } from "./Reservation";
import {Image} from  "./Image";
export class Chamber{
    idChamber!:number;
    numerochamber!:number;
    typeC!:string;
    description!:string;
    etat!:boolean;
    createdAt!:Date;
    updatedAt!:Date;
    res!:Reservation[];
    bloc!:Bloc;
    blocname!:string;
    imagebyte!:string ;
    image?: Image | null;
   

}