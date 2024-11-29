import { OptionalId } from "mongodb";

export type FlightsModel = OptionalId<{
    destino: string;
    origen: string;
    fechayhora:string;
}>;

export type Flights = {
  id: string;
  destino: string;
  origen: string;
  fechayhora:string;
};