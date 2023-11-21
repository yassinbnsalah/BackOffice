import { Image } from "./Image";
import { Universite } from "./Universite";

export class Foyer {
    idFoyer !: number;
    nomFoyer!: string;
    capaciteFoyer!: number;
    etat!:boolean;
    createdAt!:Date;
    updatedAt!:Date;
    universite !: Universite ;
    imagebyte!:string ;
    image?: Image | null;
} 
