import {Foyer} from "./Foyer";
import {Chamber} from "./Chamber";

export class Bloc{
  idBloc!:number;
  nomBloc!:string;
  status!:string;
  description!:string;
  capaciteBloc!:number;
  CreatedAt!:Date;
  UpdatedAt!:Date;
  foyer!:Foyer;
  chambers!:Chamber[];
}
