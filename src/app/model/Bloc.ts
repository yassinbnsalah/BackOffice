import {Foyer} from "./Foyer";
import {Chamber} from "./Chamber";

export class Bloc{
  idBloc!:Number;
  nomBloc!:String;
  status!:String;
  description!:String;
  capaciteBloc!:number;
  CreatedAt!:Date;
  UpdatedAt!:Date;
  foyer!:Foyer;
  chambers!:Chamber[];
}
