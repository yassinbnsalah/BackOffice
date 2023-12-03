import {Foyer} from "./Foyer";
import {Image} from "./Image";
import {Document} from "./Documents";

export class Universite {
  idUniversite!: number;
  nomUniversite!: string;
  adresse!: string;
  statuts!: string;
  foyer!: Foyer;
  description!:string;
  email!:string;
  firstNameAgent!:string;
  lastNameAgent!:string;
  imagebyte!:string ;
  image?: Image | null;
  documents ?:Document [] ;
}
